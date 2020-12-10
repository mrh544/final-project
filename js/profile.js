const profile = {

  display: function()
  {
    // get investor id from .html filename
    let path = window.location.pathname;
    let investorID = path.split('/').pop().split('.html')[0];

    // tabs
    fetch('../data/' + investorID + '.json')
      .then(response => response.json())
      .then(response => {
        console.log(response);
          fetch('../templates/fund-tab.mustache')
          .then(response => response.text())
          .then(template => {
            for(let i = 0; i < 10; i++)
            {
              let data = {
                ticker : response[i].ticker,
                shares : response[i].shares.toLocaleString()
              }

              const rendered = Mustache.render(template, data);

              $('.users').append(rendered);
            }
          });
      });

      // card and tags
      fetch('../investors/' + investorID + '.json')
      .then(response => response.json())
      .then(response => {
        // card
        fetch('../templates/fund-card.mustache')
        .then(response => response.text())
        .then(template => {
          let data = {
            name : response.investor_name,
            username : response.username
          }

          const rendered = Mustache.render(template, data);

          $('.card').append(rendered);
        });

        // tags
        let tags = response.tags;

        tags.forEach(function(tag) {
          $('.properties').append('<h2>'+ tag +'</h2>');
        });
      });
  }
}
