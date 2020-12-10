const search = {

  byInput: function(investors, id)
  {
    let tagName = $('#' + id).val();

    search.filterName(investors, tagName);
  },

  byTag: function(investors) {
    $('.tag').click(function() {
      let tagName = $(this).text();

      search.filterTag(investors, tagName);
    });
  },

  filterName: function(investors, tagName)
  {
    investors.forEach(function(investor) {
      fetch('./investors/' + investor.fund + '.json').then(data => data.json()).then(data => {
        let name = [data.investor_name];

        // initialize fuse search library
        const options = { includeScore: true };
        const fuse = new Fuse(name, options);
        const result = fuse.search(tagName);

        // 0.2 threshold appears to be accurate enough
        if(!(result.length > 0 && result[0].score < 0.2))
        {
          $('#investors').find('#' + investor.fund).fadeOut('slow');
        }
      });
    });
  },

  filterTag: function(investors, tagName)
  {
    investors.forEach(function(investor) {
      fetch('./investors/' + investor.fund + '.json').then(data => data.json()).then(data => {
        let tags = data.tags;

        // initialize fuse search library
        const options = { includeScore: true };
        const fuse = new Fuse(tags, options);
        const result = fuse.search(tagName);

        // 0.2 threshold appears to be accurate enough
        if(!(result.length > 0 && result[0].score < 0.2))
        {
          $('#investors').find('#' + investor.fund).fadeOut('slow');
        }
      });
    });
  },

}
