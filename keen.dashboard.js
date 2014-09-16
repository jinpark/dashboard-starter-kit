var client = new Keen({
  projectId: "53b73cf333e4060aaf00000a",
  readKey: "402860dd540564e7def2877ae7669a5c6dd14c7dcb3fc21b953e0669486a039bef201efa6de033c59465a66b70a9b7c8aaa956753eb86cf3a42b61370518638052ba7502be73f094e3684c34e8848f4e0bc54781fcd5c5913f1ccb2f39dbf19eb296c292e773d2e7519a874d914f5c5d"
});

Keen.ready(function(){


  // ----------------------------------------
  // Number of messages past 7 days
  // ----------------------------------------
  var impressions_timeline = new Keen.Query("count", {
    eventCollection: "message",
    timeframe: "last_7_days",
    interval: "hourly",
  });
  client.draw(impressions_timeline, document.getElementById("chart-01"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Messages per nick (last 7 days)
  // ----------------------------------------
  var nick_messages_week = new Keen.Query("count", {
    eventCollection: "message",
    timeframe: "last_7_days",
    groupBy: "nick"
  });
  client.draw(nick_messages_week, document.getElementById("chart-02"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });

  // ----------------------------------------
  // Messages per nick (all time)
  // ----------------------------------------
  var nick_messages_all = new Keen.Query("count", {
    eventCollection: "message",
    groupBy: "nick"
  });
  client.draw(nick_messages_all, document.getElementById("chart-03"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });

  // ----------------------------------------
  // Fish Sauce mentions
  // ----------------------------------------

  var fish_sauce = new Keen.Query("count", {
    eventCollection: "message",
    filters: [{"property_name":"text","operator":"contains","property_value":"fish sauce"}]
  });
  client.draw(fish_sauce, document.getElementById("chart-04"), {
    // Custom configuration here
  });


  // ----------------------------------------
  // Number of reports asked in the last 7 days
  // ----------------------------------------

  var query = new Keen.Query("count", {
    eventCollection: "message",
    timeframe: "last_7_days",
    filters: [{"property_name":"text","operator":"contains","property_value":"report"},
              {"property_name":"nick","operator":"eq","property_value":"jin"}]
  });
  client.draw(query, document.getElementById("chart-05"), {
    // Custom configuration here
  });


  // ----------------------------------------
  // LL Bean reports asked by pleb
  // ----------------------------------------

  var query = new Keen.Query("count", {
    eventCollection: "message",
    filters: [{"property_name":"text","operator":"contains","property_value":"bean"},
    {"property_name":"nick","operator":"eq","property_value":"pleb"}]
  });
  client.draw(query, document.getElementById("chart-06"), {
    // Custom configuration here
  });



  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  // var pageviews_timeline = new Keen.Query("count", {
  //   eventCollection: "message",
  //   interval: "last_7_days",
  //   interval: "hourly",
  // });
  // client.draw(pageviews_timeline, document.getElementById("chart-03"), {
  //   chartType: "areachart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //       height: "85%",
  //       left: "5%",
  //       top: "5%",
  //       width: "80%"
  //     },
  //     isStacked: true
  //   }
  // });


  // ----------------------------------------
  // Impressions timeline (device)
  // ----------------------------------------
  // var impressions_timeline_by_device = new Keen.Query("count", {
  //   eventCollection: "impressions",
  //   groupBy: "user.device_info.device.family",
  //   interval: "hourly",
  //   timeframe: {
  //     start: "2014-05-04T00:00:00.000Z",
  //     end: "2014-05-05T00:00:00.000Z"
  //   }
  // });
  // client.draw(impressions_timeline_by_device, document.getElementById("chart-04"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //       height: "75%",
  //       left: "10%",
  //       top: "5%",
  //       width: "60%"
  //     },
  //     bar: {
  //       groupWidth: "85%"
  //     },
  //     isStacked: true
  //   }
  // });


  // ----------------------------------------
  // Impressions timeline (country)
  // ----------------------------------------
  // var impressions_timeline_by_country = new Keen.Query("count", {
  //   eventCollection: "impressions",
  //   groupBy: "user.geo_info.country",
  //   interval: "hourly",
  //   timeframe: {
  //     start: "2014-05-04T00:00:00.000Z",
  //     end: "2014-05-05T00:00:00.000Z"
  //   }
  // });
  // client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //       height: "75%",
  //       left: "10%",
  //       top: "5%",
  //       width: "60%"
  //     },
  //     bar: {
  //       groupWidth: "85%"
  //     },
  //     isStacked: true
  //   }
  // });

});
