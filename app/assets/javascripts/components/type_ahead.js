(function(root, undefined) {
  "use strict";

    var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches, substrRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            // the typeahead jQuery plugin expects suggestions to a
            // JavaScript object, refer to typeahead docs for more info
            matches.push({ value: str });
          }
        });

        cb(matches);
      };
    };


    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
      'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];



  Ember.TypeAheadComponent = Ember.TextField.extend({

    didInsertElement: function() {
      this._super();
      var _this = this;

      //if(!this.get("data")){
      //  throw "No data property set";
      //}
      //
      //if (jQuery.isFunction(this.get("data").then)){
      //  this.get("data").then(function(data) {
      //    _this.initializeTypeahead(data);
      //  });
      //}
      //
      //else{
      //  this.initializeTypeahead(this.get("data"));
      //}
        this.initializeTypeahead();
    },

    initializeTypeahead: function(data){
      var _this = this;
      this.typeahead = this.$().typeahead({
              hint: true,
              highlight: true,
              minLength: 1
          },
          {
        name: _this.$().attr('id') || "typeahead",
          displayKey: 'value',
            source: substringMatcher(states)

        //limit: this.get("limit") || 5,
        //local: data.map(function(item) {
        //  return {
        //    value: item.get(_this.get("name")),
        //    name: item.get(_this.get("name")),
        //    tokens: [item.get(_this.get("name"))],
        //    emberObject: item
        //  };
        //})
      });

      this.typeahead.on("typeahead:selected", function(event, item) {
          console.log('1');
          console.log(item.emberObject);
        _this.set("selection", item);
      });

      this.typeahead.on("typeahead:autocompleted", function(event, item) {
          console.log('2');
        _this.set("selection", item.emberObject);
      });

      if (this.get("selection")) {
          console.log('3');
        this.typeahead.val(this.get("selection.name"));
      }
    },

    selectionObserver: function() {
        console.log(this.get("selection"));
      if (Ember.isEmpty(this.get('selection')) === true) {
        return this.typeahead.val('');
      }
        console.log('action');
        console.log(this.get('action'));
        console.log(this.get('action'));
        console.log(this.get("selection"));
        Ember.run.once(this,function(){
            console.log('aaa');
            this.sendAction('submit', this.get('selection'));
        });

      return this.typeahead.val(this.get("selection").value);
    }.observes("selection")

  });
  Ember.Handlebars.helper('type-ahead', Ember.TypeAheadComponent);
}(this));