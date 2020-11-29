const search = {

  getInput: function(id)
  {
    return $('#' + id).val();
  },

  searchByTag: function(investors, tagName)
  {
    investors.forEach(function(investor) {
      fetch('./investors/' + investor.fund + '.json').then(data => data.json()).then(data => {
        let roi = data.roi;
        let tags = data.tags;

        if(tags.indexOf(tagName) == -1)
        {
          $('#investors').find('#' + investor.fund).fadeOut('slow');
        }
      });
    });
  }
}
