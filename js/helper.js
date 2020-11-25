const helper = {

  parseDOM: function(data)
  {
    let parser = new DOMParser();
    let dom = parser.parseFromString(data, "text/html");
    return $(dom.body);
  },

  parseXML: function(data)
  {
    let xml = new XMLSerializer().serializeToString(data);
    let xmlDoc = $.parseXML(xml);
    return $(xmlDoc);
  }
  
}
