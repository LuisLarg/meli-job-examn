const router = require("express").Router(),
  https = require("https");

router.get("/:id", (req, res) => {
  let firstStream = "";
  let secondStream = "";

  https
    .request(
      `https://api.mercadolibre.com/items/${req.params.id}`,
      response => {
        response.on("data", chunk => (firstStream += chunk));
        response.on("end", () => {
          const data = JSON.parse(firstStream);

          https
            .request(
              `https://api.mercadolibre.com/items/${req.params.id}/description`,
              response => {
                response.on("data", chunk => (secondStream += chunk));
                response.on("end", () => {
                  let parsedData = {
                    author: {
                      name: "Pepito",
                      lastname: "Garcia"
                    },
                    item: {
                      id: data.id,
                      title: data.title,
                      price: {
                        currency: data.currency_id,
                        amount: data.price,
                        decimals: 0
                      },
                      picture: data.pictures[0].url,
                      condition: data.condition,
                      free_shipping: data.shipping.free_shipping,
                      sold_quantity: data.sold_quantity,
                      description: JSON.parse(secondStream).plain_text
                    }
                  };

                  res.status(data.status === "active" ? 200 : 410); // SEO
                  res.send(parsedData);
                });
              }
            )
            .end();
        });
      }
    )
    .end();
});

router.get("*", (req, res) => {
  let str = "";

  https
    .request(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.query}`,
      response => {
        response.on("data", chunk => (str += chunk));
        response.on("end", () => {
          const data = JSON.parse(str);
          const parsedData = {
            author: {
              name: "Pepito",
              lastname: "Garcia"
            },
            categories:
              data.filters.length > 0
                ? data.filters[0].values[0].path_from_root.map(category => {
                    return category.name;
                  })
                : [],
            items: data.results.map(item => {
              return {
                id: item.id,
                title: item.title,
                price: {
                  currency: item.currency_id,
                  amount: item.price,
                  decimals: 0
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                state: item.address.state_name
              };
            })
          };

          res.status(parsedData.items.length > 0 ? 200 : 404); // SEO
          res.send(parsedData);
        });
      }
    )
    .end();
});

module.exports = router;
