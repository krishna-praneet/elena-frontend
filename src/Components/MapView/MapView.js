import './MapView.css';
import React, { Component } from 'react';
import ReactMapGL, { Marker, ScaleControl } from 'react-map-gl';

export default class MapView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0,
        path: [
          {
              "id": 23,
              "links": [
                  {
                      "fromId": 3,
                      "toId": 23,
                      "data": {
                          "distance": 516.6756406153114,
                          "elevation": -9
                      },
                      "id": "3👉 23"
                  },
                  {
                      "fromId": 23,
                      "toId": 3,
                      "data": {
                          "distance": 516.6756406153114,
                          "elevation": 9
                      },
                      "id": "23👉 3"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.401121,
                      -72.535653
                  ],
                  "osmId": 61797514,
                  "elevation": 50
              }
          },
          {
              "id": 3,
              "links": [
                  {
                      "fromId": 7,
                      "toId": 3,
                      "data": {
                          "distance": 189.7578354257688,
                          "elevation": 2
                      },
                      "id": "7👉 3"
                  },
                  {
                      "fromId": 3,
                      "toId": 7,
                      "data": {
                          "distance": 189.7578354257688,
                          "elevation": -2
                      },
                      "id": "3👉 7"
                  },
                  {
                      "fromId": 3,
                      "toId": 29,
                      "data": {
                          "distance": 439.22294699890375,
                          "elevation": -7
                      },
                      "id": "3👉 29"
                  },
                  {
                      "fromId": 29,
                      "toId": 3,
                      "data": {
                          "distance": 439.22294699890375,
                          "elevation": 7
                      },
                      "id": "29👉 3"
                  },
                  {
                      "fromId": 3,
                      "toId": 23,
                      "data": {
                          "distance": 516.6756406153114,
                          "elevation": -9
                      },
                      "id": "3👉 23"
                  },
                  {
                      "fromId": 23,
                      "toId": 3,
                      "data": {
                          "distance": 516.6756406153114,
                          "elevation": 9
                      },
                      "id": "23👉 3"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.396501,
                      -72.534981
                  ],
                  "osmId": 61790432,
                  "elevation": 59
              }
          },
          {
              "id": 29,
              "links": [
                  {
                      "fromId": 3,
                      "toId": 29,
                      "data": {
                          "distance": 439.22294699890375,
                          "elevation": -7
                      },
                      "id": "3👉 29"
                  },
                  {
                      "fromId": 29,
                      "toId": 3,
                      "data": {
                          "distance": 439.22294699890375,
                          "elevation": 7
                      },
                      "id": "29👉 3"
                  },
                  {
                      "fromId": 29,
                      "toId": 2320,
                      "data": {
                          "distance": 44.328769611335346,
                          "elevation": 0
                      },
                      "id": "29👉 2320"
                  },
                  {
                      "fromId": 2320,
                      "toId": 29,
                      "data": {
                          "distance": 44.328769611335346,
                          "elevation": 0
                      },
                      "id": "2320👉 29"
                  },
                  {
                      "fromId": 29,
                      "toId": 3231,
                      "data": {
                          "distance": 137.10926426525677,
                          "elevation": -2
                      },
                      "id": "29👉 3231"
                  },
                  {
                      "fromId": 3231,
                      "toId": 29,
                      "data": {
                          "distance": 137.10926426525677,
                          "elevation": 2
                      },
                      "id": "3231👉 29"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.393126,
                      -72.53776
                  ],
                  "osmId": 61798447,
                  "elevation": 52
              }
          },
          {
              "id": 2320,
              "links": [
                  {
                      "fromId": 29,
                      "toId": 2320,
                      "data": {
                          "distance": 44.328769611335346,
                          "elevation": 0
                      },
                      "id": "29👉 2320"
                  },
                  {
                      "fromId": 2320,
                      "toId": 29,
                      "data": {
                          "distance": 44.328769611335346,
                          "elevation": 0
                      },
                      "id": "2320👉 29"
                  },
                  {
                      "fromId": 2320,
                      "toId": 35,
                      "data": {
                          "distance": 8.04792938648902,
                          "elevation": 0
                      },
                      "id": "2320👉 35"
                  },
                  {
                      "fromId": 35,
                      "toId": 2320,
                      "data": {
                          "distance": 8.04792938648902,
                          "elevation": 0
                      },
                      "id": "35👉 2320"
                  },
                  {
                      "fromId": 2321,
                      "toId": 2320,
                      "data": {
                          "distance": 187.87699909083355,
                          "elevation": 2
                      },
                      "id": "2321👉 2320"
                  },
                  {
                      "fromId": 2320,
                      "toId": 2321,
                      "data": {
                          "distance": 187.87699909083355,
                          "elevation": -2
                      },
                      "id": "2320👉 2321"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3927282,
                      -72.5377246
                  ],
                  "osmId": 6382267402,
                  "elevation": 52
              }
          },
          {
              "id": 2321,
              "links": [
                  {
                      "fromId": 8,
                      "toId": 2321,
                      "data": {
                          "distance": 14.223009589467148,
                          "elevation": -3
                      },
                      "id": "8👉 2321"
                  },
                  {
                      "fromId": 2321,
                      "toId": 8,
                      "data": {
                          "distance": 14.223009589467148,
                          "elevation": 3
                      },
                      "id": "2321👉 8"
                  },
                  {
                      "fromId": 2321,
                      "toId": 2320,
                      "data": {
                          "distance": 187.87699909083355,
                          "elevation": 2
                      },
                      "id": "2321👉 2320"
                  },
                  {
                      "fromId": 2320,
                      "toId": 2321,
                      "data": {
                          "distance": 187.87699909083355,
                          "elevation": -2
                      },
                      "id": "2320👉 2321"
                  },
                  {
                      "fromId": 2321,
                      "toId": 35,
                      "data": {
                          "distance": 185.57929504849264,
                          "elevation": 2
                      },
                      "id": "2321👉 35"
                  },
                  {
                      "fromId": 35,
                      "toId": 2321,
                      "data": {
                          "distance": 185.57929504849264,
                          "elevation": -2
                      },
                      "id": "35👉 2321"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3925099,
                      -72.535456
                  ],
                  "osmId": 6382267403,
                  "elevation": 50
              }
          },
          {
              "id": 8,
              "links": [
                  {
                      "fromId": 1580,
                      "toId": 8,
                      "data": {
                          "distance": 58.49864353679089,
                          "elevation": 3
                      },
                      "id": "1580👉 8"
                  },
                  {
                      "fromId": 8,
                      "toId": 1580,
                      "data": {
                          "distance": 58.49864353679089,
                          "elevation": -3
                      },
                      "id": "8👉 1580"
                  },
                  {
                      "fromId": 8,
                      "toId": 34,
                      "data": {
                          "distance": 45.48982053247423,
                          "elevation": 0
                      },
                      "id": "8👉 34"
                  },
                  {
                      "fromId": 34,
                      "toId": 8,
                      "data": {
                          "distance": 45.48982053247423,
                          "elevation": 0
                      },
                      "id": "34👉 8"
                  },
                  {
                      "fromId": 8,
                      "toId": 2321,
                      "data": {
                          "distance": 14.223009589467148,
                          "elevation": -3
                      },
                      "id": "8👉 2321"
                  },
                  {
                      "fromId": 2321,
                      "toId": 8,
                      "data": {
                          "distance": 14.223009589467148,
                          "elevation": 3
                      },
                      "id": "2321👉 8"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.392387,
                      -72.535408
                  ],
                  "osmId": 61792471,
                  "elevation": 53
              }
          },
          {
              "id": 34,
              "links": [
                  {
                      "fromId": 8,
                      "toId": 34,
                      "data": {
                          "distance": 45.48982053247423,
                          "elevation": 0
                      },
                      "id": "8👉 34"
                  },
                  {
                      "fromId": 34,
                      "toId": 8,
                      "data": {
                          "distance": 45.48982053247423,
                          "elevation": 0
                      },
                      "id": "34👉 8"
                  },
                  {
                      "fromId": 34,
                      "toId": 11,
                      "data": {
                          "distance": 5.011038904464356,
                          "elevation": 0
                      },
                      "id": "34👉 11"
                  },
                  {
                      "fromId": 11,
                      "toId": 34,
                      "data": {
                          "distance": 5.011038904464356,
                          "elevation": 0
                      },
                      "id": "11👉 34"
                  },
                  {
                      "fromId": 34,
                      "toId": 2131,
                      "data": {
                          "distance": 17.995236229911786,
                          "elevation": 0
                      },
                      "id": "34👉 2131"
                  },
                  {
                      "fromId": 2131,
                      "toId": 34,
                      "data": {
                          "distance": 17.995236229911786,
                          "elevation": 0
                      },
                      "id": "2131👉 34"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.392429,
                      -72.534857
                  ],
                  "osmId": 61801264,
                  "elevation": 53
              }
          },
          {
              "id": 2131,
              "links": [
                  {
                      "fromId": 34,
                      "toId": 2131,
                      "data": {
                          "distance": 17.995236229911786,
                          "elevation": 0
                      },
                      "id": "34👉 2131"
                  },
                  {
                      "fromId": 2131,
                      "toId": 34,
                      "data": {
                          "distance": 17.995236229911786,
                          "elevation": 0
                      },
                      "id": "2131👉 34"
                  },
                  {
                      "fromId": 2131,
                      "toId": 2145,
                      "data": {
                          "distance": 18.559775291785492,
                          "elevation": 0
                      },
                      "id": "2131👉 2145"
                  },
                  {
                      "fromId": 2145,
                      "toId": 2131,
                      "data": {
                          "distance": 18.559775291785492,
                          "elevation": 0
                      },
                      "id": "2145👉 2131"
                  },
                  {
                      "fromId": 2131,
                      "toId": 2146,
                      "data": {
                          "distance": 71.30136777680214,
                          "elevation": 0
                      },
                      "id": "2131👉 2146"
                  },
                  {
                      "fromId": 2146,
                      "toId": 2131,
                      "data": {
                          "distance": 71.30136777680214,
                          "elevation": 0
                      },
                      "id": "2146👉 2131"
                  },
                  {
                      "fromId": 2145,
                      "toId": 2131,
                      "data": {
                          "distance": 18.559775291785492,
                          "elevation": 0
                      },
                      "id": "2145👉 2131"
                  },
                  {
                      "fromId": 2131,
                      "toId": 2145,
                      "data": {
                          "distance": 18.559775291785492,
                          "elevation": 0
                      },
                      "id": "2131👉 2145"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3922725,
                      -72.5348012
                  ],
                  "osmId": 6357566487,
                  "elevation": 53
              }
          },
          {
              "id": 2145,
              "links": [
                  {
                      "fromId": 2131,
                      "toId": 2145,
                      "data": {
                          "distance": 18.559775291785492,
                          "elevation": 0
                      },
                      "id": "2131👉 2145"
                  },
                  {
                      "fromId": 2145,
                      "toId": 2131,
                      "data": {
                          "distance": 18.559775291785492,
                          "elevation": 0
                      },
                      "id": "2145👉 2131"
                  },
                  {
                      "fromId": 2145,
                      "toId": 2143,
                      "data": {
                          "distance": 18.190589355595858,
                          "elevation": 0
                      },
                      "id": "2145👉 2143"
                  },
                  {
                      "fromId": 2143,
                      "toId": 2145,
                      "data": {
                          "distance": 18.190589355595858,
                          "elevation": 0
                      },
                      "id": "2143👉 2145"
                  },
                  {
                      "fromId": 2145,
                      "toId": 2146,
                      "data": {
                          "distance": 69.53251395361255,
                          "elevation": 0
                      },
                      "id": "2145👉 2146"
                  },
                  {
                      "fromId": 2146,
                      "toId": 2145,
                      "data": {
                          "distance": 69.53251395361255,
                          "elevation": 0
                      },
                      "id": "2146👉 2145"
                  },
                  {
                      "fromId": 2145,
                      "toId": 2131,
                      "data": {
                          "distance": 18.559775291785492,
                          "elevation": 0
                      },
                      "id": "2145👉 2131"
                  },
                  {
                      "fromId": 2131,
                      "toId": 2145,
                      "data": {
                          "distance": 18.559775291785492,
                          "elevation": 0
                      },
                      "id": "2131👉 2145"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3921111,
                      -72.5347436
                  ],
                  "osmId": 6357566502,
                  "elevation": 53
              }
          },
          {
              "id": 2143,
              "links": [
                  {
                      "fromId": 2145,
                      "toId": 2143,
                      "data": {
                          "distance": 18.190589355595858,
                          "elevation": 0
                      },
                      "id": "2145👉 2143"
                  },
                  {
                      "fromId": 2143,
                      "toId": 2145,
                      "data": {
                          "distance": 18.190589355595858,
                          "elevation": 0
                      },
                      "id": "2143👉 2145"
                  },
                  {
                      "fromId": 2143,
                      "toId": 2141,
                      "data": {
                          "distance": 17.455034119574073,
                          "elevation": 0
                      },
                      "id": "2143👉 2141"
                  },
                  {
                      "fromId": 2141,
                      "toId": 2143,
                      "data": {
                          "distance": 17.455034119574073,
                          "elevation": 0
                      },
                      "id": "2141👉 2143"
                  },
                  {
                      "fromId": 2143,
                      "toId": 2144,
                      "data": {
                          "distance": 70.2824035618115,
                          "elevation": 0
                      },
                      "id": "2143👉 2144"
                  },
                  {
                      "fromId": 2144,
                      "toId": 2143,
                      "data": {
                          "distance": 70.2824035618115,
                          "elevation": 0
                      },
                      "id": "2144👉 2143"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3919529,
                      -72.5346872
                  ],
                  "osmId": 6357566500,
                  "elevation": 53
              }
          },
          {
              "id": 2141,
              "links": [
                  {
                      "fromId": 2143,
                      "toId": 2141,
                      "data": {
                          "distance": 17.455034119574073,
                          "elevation": 0
                      },
                      "id": "2143👉 2141"
                  },
                  {
                      "fromId": 2141,
                      "toId": 2143,
                      "data": {
                          "distance": 17.455034119574073,
                          "elevation": 0
                      },
                      "id": "2141👉 2143"
                  },
                  {
                      "fromId": 2141,
                      "toId": 2140,
                      "data": {
                          "distance": 16.97867202161301,
                          "elevation": 1
                      },
                      "id": "2141👉 2140"
                  },
                  {
                      "fromId": 2140,
                      "toId": 2141,
                      "data": {
                          "distance": 16.97867202161301,
                          "elevation": -1
                      },
                      "id": "2140👉 2141"
                  },
                  {
                      "fromId": 2141,
                      "toId": 2142,
                      "data": {
                          "distance": 69.8791481016717,
                          "elevation": 0
                      },
                      "id": "2141👉 2142"
                  },
                  {
                      "fromId": 2142,
                      "toId": 2141,
                      "data": {
                          "distance": 69.8791481016717,
                          "elevation": 0
                      },
                      "id": "2142👉 2141"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.391804,
                      -72.5346199
                  ],
                  "osmId": 6357566498,
                  "elevation": 53
              }
          },
          {
              "id": 2140,
              "links": [
                  {
                      "fromId": 2141,
                      "toId": 2140,
                      "data": {
                          "distance": 16.97867202161301,
                          "elevation": 1
                      },
                      "id": "2141👉 2140"
                  },
                  {
                      "fromId": 2140,
                      "toId": 2141,
                      "data": {
                          "distance": 16.97867202161301,
                          "elevation": -1
                      },
                      "id": "2140👉 2141"
                  },
                  {
                      "fromId": 2140,
                      "toId": 2130,
                      "data": {
                          "distance": 18.695482491322625,
                          "elevation": 0
                      },
                      "id": "2140👉 2130"
                  },
                  {
                      "fromId": 2130,
                      "toId": 2140,
                      "data": {
                          "distance": 18.695482491322625,
                          "elevation": 0
                      },
                      "id": "2130👉 2140"
                  },
                  {
                      "fromId": 2140,
                      "toId": 2132,
                      "data": {
                          "distance": 69.29222893494634,
                          "elevation": -1
                      },
                      "id": "2140👉 2132"
                  },
                  {
                      "fromId": 2132,
                      "toId": 2140,
                      "data": {
                          "distance": 69.29222893494634,
                          "elevation": 1
                      },
                      "id": "2132👉 2140"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3916597,
                      -72.5345523
                  ],
                  "osmId": 6357566497,
                  "elevation": 54
              }
          },
          {
              "id": 2130,
              "links": [
                  {
                      "fromId": 2140,
                      "toId": 2130,
                      "data": {
                          "distance": 18.695482491322625,
                          "elevation": 0
                      },
                      "id": "2140👉 2130"
                  },
                  {
                      "fromId": 2130,
                      "toId": 2140,
                      "data": {
                          "distance": 18.695482491322625,
                          "elevation": 0
                      },
                      "id": "2130👉 2140"
                  },
                  {
                      "fromId": 2130,
                      "toId": 2000,
                      "data": {
                          "distance": 21.808415869336404,
                          "elevation": 0
                      },
                      "id": "2130👉 2000"
                  },
                  {
                      "fromId": 2000,
                      "toId": 2130,
                      "data": {
                          "distance": 21.808415869336404,
                          "elevation": 0
                      },
                      "id": "2000👉 2130"
                  },
                  {
                      "fromId": 2130,
                      "toId": 2139,
                      "data": {
                          "distance": 68.72354317284587,
                          "elevation": -1
                      },
                      "id": "2130👉 2139"
                  },
                  {
                      "fromId": 2139,
                      "toId": 2130,
                      "data": {
                          "distance": 68.72354317284587,
                          "elevation": 1
                      },
                      "id": "2139👉 2130"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3915008,
                      -72.5344779
                  ],
                  "osmId": 6357566485,
                  "elevation": 54
              }
          },
          {
              "id": 2000,
              "links": [
                  {
                      "fromId": 2136,
                      "toId": 2000,
                      "data": {
                          "distance": 18.46000065962009,
                          "elevation": 0
                      },
                      "id": "2136👉 2000"
                  },
                  {
                      "fromId": 2000,
                      "toId": 2136,
                      "data": {
                          "distance": 18.46000065962009,
                          "elevation": 0
                      },
                      "id": "2000👉 2136"
                  },
                  {
                      "fromId": 2000,
                      "toId": 1999,
                      "data": {
                          "distance": 55.56460810079471,
                          "elevation": 0
                      },
                      "id": "2000👉 1999"
                  },
                  {
                      "fromId": 1999,
                      "toId": 2000,
                      "data": {
                          "distance": 55.56460810079471,
                          "elevation": 0
                      },
                      "id": "1999👉 2000"
                  },
                  {
                      "fromId": 2130,
                      "toId": 2000,
                      "data": {
                          "distance": 21.808415869336404,
                          "elevation": 0
                      },
                      "id": "2130👉 2000"
                  },
                  {
                      "fromId": 2000,
                      "toId": 2130,
                      "data": {
                          "distance": 21.808415869336404,
                          "elevation": 0
                      },
                      "id": "2000👉 2130"
                  },
                  {
                      "fromId": 2000,
                      "toId": 2138,
                      "data": {
                          "distance": 54.276447851197666,
                          "elevation": 0
                      },
                      "id": "2000👉 2138"
                  },
                  {
                      "fromId": 2138,
                      "toId": 2000,
                      "data": {
                          "distance": 54.276447851197666,
                          "elevation": 0
                      },
                      "id": "2138👉 2000"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3913989,
                      -72.534251
                  ],
                  "osmId": 6353299694,
                  "elevation": 54
              }
          },
          {
              "id": 2136,
              "links": [
                  {
                      "fromId": 2134,
                      "toId": 2136,
                      "data": {
                          "distance": 18.215097014450624,
                          "elevation": 0
                      },
                      "id": "2134👉 2136"
                  },
                  {
                      "fromId": 2136,
                      "toId": 2134,
                      "data": {
                          "distance": 18.215097014450624,
                          "elevation": 0
                      },
                      "id": "2136👉 2134"
                  },
                  {
                      "fromId": 2136,
                      "toId": 2000,
                      "data": {
                          "distance": 18.46000065962009,
                          "elevation": 0
                      },
                      "id": "2136👉 2000"
                  },
                  {
                      "fromId": 2000,
                      "toId": 2136,
                      "data": {
                          "distance": 18.46000065962009,
                          "elevation": 0
                      },
                      "id": "2000👉 2136"
                  },
                  {
                      "fromId": 2136,
                      "toId": 2137,
                      "data": {
                          "distance": 54.399221792276144,
                          "elevation": 0
                      },
                      "id": "2136👉 2137"
                  },
                  {
                      "fromId": 2137,
                      "toId": 2136,
                      "data": {
                          "distance": 54.399221792276144,
                          "elevation": 0
                      },
                      "id": "2137👉 2136"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.39124,
                      -72.5341859
                  ],
                  "osmId": 6357566493,
                  "elevation": 54
              }
          },
          {
              "id": 2134,
              "links": [
                  {
                      "fromId": 2152,
                      "toId": 2134,
                      "data": {
                          "distance": 33.59817641992632,
                          "elevation": 0
                      },
                      "id": "2152👉 2134"
                  },
                  {
                      "fromId": 2134,
                      "toId": 2152,
                      "data": {
                          "distance": 33.59817641992632,
                          "elevation": 0
                      },
                      "id": "2134👉 2152"
                  },
                  {
                      "fromId": 2134,
                      "toId": 2136,
                      "data": {
                          "distance": 18.215097014450624,
                          "elevation": 0
                      },
                      "id": "2134👉 2136"
                  },
                  {
                      "fromId": 2136,
                      "toId": 2134,
                      "data": {
                          "distance": 18.215097014450624,
                          "elevation": 0
                      },
                      "id": "2136👉 2134"
                  },
                  {
                      "fromId": 2134,
                      "toId": 2135,
                      "data": {
                          "distance": 54.519933076596935,
                          "elevation": 0
                      },
                      "id": "2134👉 2135"
                  },
                  {
                      "fromId": 2135,
                      "toId": 2134,
                      "data": {
                          "distance": 54.519933076596935,
                          "elevation": 0
                      },
                      "id": "2135👉 2134"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3910832,
                      -72.5341217
                  ],
                  "osmId": 6357566491,
                  "elevation": 54
              }
          },
          {
              "id": 2152,
              "links": [
                  {
                      "fromId": 2153,
                      "toId": 2152,
                      "data": {
                          "distance": 21.902946425192166,
                          "elevation": 0
                      },
                      "id": "2153👉 2152"
                  },
                  {
                      "fromId": 2152,
                      "toId": 2153,
                      "data": {
                          "distance": 21.902946425192166,
                          "elevation": 0
                      },
                      "id": "2152👉 2153"
                  },
                  {
                      "fromId": 2152,
                      "toId": 2134,
                      "data": {
                          "distance": 33.59817641992632,
                          "elevation": 0
                      },
                      "id": "2152👉 2134"
                  },
                  {
                      "fromId": 2134,
                      "toId": 2152,
                      "data": {
                          "distance": 33.59817641992632,
                          "elevation": 0
                      },
                      "id": "2134👉 2152"
                  },
                  {
                      "fromId": 2152,
                      "toId": 2153,
                      "data": {
                          "distance": 21.902946425192166,
                          "elevation": 0
                      },
                      "id": "2152👉 2153"
                  },
                  {
                      "fromId": 2153,
                      "toId": 2152,
                      "data": {
                          "distance": 21.902946425192166,
                          "elevation": 0
                      },
                      "id": "2153👉 2152"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3910248,
                      -72.5337203
                  ],
                  "osmId": 6357566510,
                  "elevation": 54
              }
          },
          {
              "id": 2153,
              "links": [
                  {
                      "fromId": 2133,
                      "toId": 2153,
                      "data": {
                          "distance": 3.041684610742018,
                          "elevation": 0
                      },
                      "id": "2133👉 2153"
                  },
                  {
                      "fromId": 2153,
                      "toId": 2133,
                      "data": {
                          "distance": 3.041684610742018,
                          "elevation": 0
                      },
                      "id": "2153👉 2133"
                  },
                  {
                      "fromId": 2153,
                      "toId": 2152,
                      "data": {
                          "distance": 21.902946425192166,
                          "elevation": 0
                      },
                      "id": "2153👉 2152"
                  },
                  {
                      "fromId": 2152,
                      "toId": 2153,
                      "data": {
                          "distance": 21.902946425192166,
                          "elevation": 0
                      },
                      "id": "2152👉 2153"
                  },
                  {
                      "fromId": 2152,
                      "toId": 2153,
                      "data": {
                          "distance": 21.902946425192166,
                          "elevation": 0
                      },
                      "id": "2152👉 2153"
                  },
                  {
                      "fromId": 2153,
                      "toId": 2152,
                      "data": {
                          "distance": 21.902946425192166,
                          "elevation": 0
                      },
                      "id": "2153👉 2152"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3910808,
                      -72.5334646
                  ],
                  "osmId": 6357566517,
                  "elevation": 54
              }
          },
          {
              "id": 2133,
              "links": [
                  {
                      "fromId": 2002,
                      "toId": 2133,
                      "data": {
                          "distance": 7.291536050093301,
                          "elevation": 0
                      },
                      "id": "2002👉 2133"
                  },
                  {
                      "fromId": 2133,
                      "toId": 2002,
                      "data": {
                          "distance": 7.291536050093301,
                          "elevation": 0
                      },
                      "id": "2133👉 2002"
                  },
                  {
                      "fromId": 2133,
                      "toId": 2153,
                      "data": {
                          "distance": 3.041684610742018,
                          "elevation": 0
                      },
                      "id": "2133👉 2153"
                  },
                  {
                      "fromId": 2153,
                      "toId": 2133,
                      "data": {
                          "distance": 3.041684610742018,
                          "elevation": 0
                      },
                      "id": "2153👉 2133"
                  },
                  {
                      "fromId": 2135,
                      "toId": 2133,
                      "data": {
                          "distance": 16.352150512955035,
                          "elevation": 0
                      },
                      "id": "2135👉 2133"
                  },
                  {
                      "fromId": 2133,
                      "toId": 2135,
                      "data": {
                          "distance": 16.352150512955035,
                          "elevation": 0
                      },
                      "id": "2133👉 2135"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3910886,
                      -72.5334291
                  ],
                  "osmId": 6357566490,
                  "elevation": 54
              }
          },
          {
              "id": 2002,
              "links": [
                  {
                      "fromId": 1963,
                      "toId": 2002,
                      "data": {
                          "distance": 5.9011971820535996,
                          "elevation": -5
                      },
                      "id": "1963👉 2002"
                  },
                  {
                      "fromId": 2002,
                      "toId": 1963,
                      "data": {
                          "distance": 5.9011971820535996,
                          "elevation": 5
                      },
                      "id": "2002👉 1963"
                  },
                  {
                      "fromId": 2002,
                      "toId": 1968,
                      "data": {
                          "distance": 5.323741278901981,
                          "elevation": 0
                      },
                      "id": "2002👉 1968"
                  },
                  {
                      "fromId": 1968,
                      "toId": 2002,
                      "data": {
                          "distance": 5.323741278901981,
                          "elevation": 0
                      },
                      "id": "1968👉 2002"
                  },
                  {
                      "fromId": 2001,
                      "toId": 2002,
                      "data": {
                          "distance": 12.062762680535121,
                          "elevation": -5
                      },
                      "id": "2001👉 2002"
                  },
                  {
                      "fromId": 2002,
                      "toId": 2001,
                      "data": {
                          "distance": 12.062762680535121,
                          "elevation": 5
                      },
                      "id": "2002👉 2001"
                  },
                  {
                      "fromId": 2002,
                      "toId": 2133,
                      "data": {
                          "distance": 7.291536050093301,
                          "elevation": 0
                      },
                      "id": "2002👉 2133"
                  },
                  {
                      "fromId": 2133,
                      "toId": 2002,
                      "data": {
                          "distance": 7.291536050093301,
                          "elevation": 0
                      },
                      "id": "2133👉 2002"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3911073,
                      -72.533344
                  ],
                  "osmId": 6353299697,
                  "elevation": 54
              }
          },
          {
              "id": 1963,
              "links": [
                  {
                      "fromId": 1962,
                      "toId": 1963,
                      "data": {
                          "distance": 88.491023551429,
                          "elevation": 0
                      },
                      "id": "1962👉 1963"
                  },
                  {
                      "fromId": 1963,
                      "toId": 1962,
                      "data": {
                          "distance": 88.491023551429,
                          "elevation": 0
                      },
                      "id": "1963👉 1962"
                  },
                  {
                      "fromId": 1963,
                      "toId": 2002,
                      "data": {
                          "distance": 5.9011971820535996,
                          "elevation": -5
                      },
                      "id": "1963👉 2002"
                  },
                  {
                      "fromId": 2002,
                      "toId": 1963,
                      "data": {
                          "distance": 5.9011971820535996,
                          "elevation": 5
                      },
                      "id": "2002👉 1963"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3910562,
                      -72.5333246
                  ],
                  "osmId": 6348628569,
                  "elevation": 59
              }
          },
          {
              "id": 1962,
              "links": [
                  {
                      "fromId": 1964,
                      "toId": 1962,
                      "data": {
                          "distance": 10.550188163707181,
                          "elevation": 0
                      },
                      "id": "1964👉 1962"
                  },
                  {
                      "fromId": 1962,
                      "toId": 1964,
                      "data": {
                          "distance": 10.550188163707181,
                          "elevation": 0
                      },
                      "id": "1962👉 1964"
                  },
                  {
                      "fromId": 1962,
                      "toId": 1963,
                      "data": {
                          "distance": 88.491023551429,
                          "elevation": 0
                      },
                      "id": "1962👉 1963"
                  },
                  {
                      "fromId": 1963,
                      "toId": 1962,
                      "data": {
                          "distance": 88.491023551429,
                          "elevation": 0
                      },
                      "id": "1963👉 1962"
                  },
                  {
                      "fromId": 1962,
                      "toId": 1967,
                      "data": {
                          "distance": 10.026890315876816,
                          "elevation": 0
                      },
                      "id": "1962👉 1967"
                  },
                  {
                      "fromId": 1967,
                      "toId": 1962,
                      "data": {
                          "distance": 10.026890315876816,
                          "elevation": 0
                      },
                      "id": "1967👉 1962"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3902964,
                      -72.5330041
                  ],
                  "osmId": 6348628568,
                  "elevation": 59
              }
          },
          {
              "id": 1967,
              "links": [
                  {
                      "fromId": 1962,
                      "toId": 1967,
                      "data": {
                          "distance": 10.026890315876816,
                          "elevation": 0
                      },
                      "id": "1962👉 1967"
                  },
                  {
                      "fromId": 1967,
                      "toId": 1962,
                      "data": {
                          "distance": 10.026890315876816,
                          "elevation": 0
                      },
                      "id": "1967👉 1962"
                  },
                  {
                      "fromId": 1967,
                      "toId": 1046,
                      "data": {
                          "distance": 13.242010149647689,
                          "elevation": 0
                      },
                      "id": "1967👉 1046"
                  },
                  {
                      "fromId": 1046,
                      "toId": 1967,
                      "data": {
                          "distance": 13.242010149647689,
                          "elevation": 0
                      },
                      "id": "1046👉 1967"
                  },
                  {
                      "fromId": 87,
                      "toId": 1967,
                      "data": {
                          "distance": 10.233722494564768,
                          "elevation": 0
                      },
                      "id": "87👉 1967"
                  },
                  {
                      "fromId": 1967,
                      "toId": 87,
                      "data": {
                          "distance": 10.233722494564768,
                          "elevation": 0
                      },
                      "id": "1967👉 87"
                  },
                  {
                      "fromId": 1967,
                      "toId": 2001,
                      "data": {
                          "distance": 94.5258597900465,
                          "elevation": 0
                      },
                      "id": "1967👉 2001"
                  },
                  {
                      "fromId": 2001,
                      "toId": 1967,
                      "data": {
                          "distance": 94.5258597900465,
                          "elevation": 0
                      },
                      "id": "2001👉 1967"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3903209,
                      -72.5328866
                  ],
                  "osmId": 6348628573,
                  "elevation": 59
              }
          },
          {
              "id": 87,
              "links": [
                  {
                      "fromId": 87,
                      "toId": 794,
                      "data": {
                          "distance": 12.96667744475087,
                          "elevation": 0
                      },
                      "id": "87👉 794"
                  },
                  {
                      "fromId": 794,
                      "toId": 87,
                      "data": {
                          "distance": 12.96667744475087,
                          "elevation": 0
                      },
                      "id": "794👉 87"
                  },
                  {
                      "fromId": 1965,
                      "toId": 87,
                      "data": {
                          "distance": 9.917102342063925,
                          "elevation": 0
                      },
                      "id": "1965👉 87"
                  },
                  {
                      "fromId": 87,
                      "toId": 1965,
                      "data": {
                          "distance": 9.917102342063925,
                          "elevation": 0
                      },
                      "id": "87👉 1965"
                  },
                  {
                      "fromId": 87,
                      "toId": 1967,
                      "data": {
                          "distance": 10.233722494564768,
                          "elevation": 0
                      },
                      "id": "87👉 1967"
                  },
                  {
                      "fromId": 1967,
                      "toId": 87,
                      "data": {
                          "distance": 10.233722494564768,
                          "elevation": 0
                      },
                      "id": "1967👉 87"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3902324,
                      -72.5328524
                  ],
                  "osmId": 66628914,
                  "elevation": 59
              }
          },
          {
              "id": 1965,
              "links": [
                  {
                      "fromId": 1961,
                      "toId": 1965,
                      "data": {
                          "distance": 10.150808897451176,
                          "elevation": 0
                      },
                      "id": "1961👉 1965"
                  },
                  {
                      "fromId": 1965,
                      "toId": 1961,
                      "data": {
                          "distance": 10.150808897451176,
                          "elevation": 0
                      },
                      "id": "1965👉 1961"
                  },
                  {
                      "fromId": 1965,
                      "toId": 1966,
                      "data": {
                          "distance": 12.877667686599999,
                          "elevation": 0
                      },
                      "id": "1965👉 1966"
                  },
                  {
                      "fromId": 1966,
                      "toId": 1965,
                      "data": {
                          "distance": 12.877667686599999,
                          "elevation": 0
                      },
                      "id": "1966👉 1965"
                  },
                  {
                      "fromId": 219,
                      "toId": 1965,
                      "data": {
                          "distance": 42.11522447924998,
                          "elevation": 0
                      },
                      "id": "219👉 1965"
                  },
                  {
                      "fromId": 1965,
                      "toId": 219,
                      "data": {
                          "distance": 42.11522447924998,
                          "elevation": 0
                      },
                      "id": "1965👉 219"
                  },
                  {
                      "fromId": 1965,
                      "toId": 87,
                      "data": {
                          "distance": 9.917102342063925,
                          "elevation": 0
                      },
                      "id": "1965👉 87"
                  },
                  {
                      "fromId": 87,
                      "toId": 1965,
                      "data": {
                          "distance": 9.917102342063925,
                          "elevation": 0
                      },
                      "id": "87👉 1965"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3901472,
                      -72.5328167
                  ],
                  "osmId": 6348628571,
                  "elevation": 59
              }
          },
          {
              "id": 219,
              "links": [
                  {
                      "fromId": 219,
                      "toId": 2272,
                      "data": {
                          "distance": 30.935753399233338,
                          "elevation": 0
                      },
                      "id": "219👉 2272"
                  },
                  {
                      "fromId": 2272,
                      "toId": 219,
                      "data": {
                          "distance": 30.935753399233338,
                          "elevation": 0
                      },
                      "id": "2272👉 219"
                  },
                  {
                      "fromId": 2480,
                      "toId": 219,
                      "data": {
                          "distance": 31.943888477234356,
                          "elevation": -1
                      },
                      "id": "2480👉 219"
                  },
                  {
                      "fromId": 219,
                      "toId": 2480,
                      "data": {
                          "distance": 31.943888477234356,
                          "elevation": 1
                      },
                      "id": "219👉 2480"
                  },
                  {
                      "fromId": 219,
                      "toId": 1965,
                      "data": {
                          "distance": 42.11522447924998,
                          "elevation": 0
                      },
                      "id": "219👉 1965"
                  },
                  {
                      "fromId": 1965,
                      "toId": 219,
                      "data": {
                          "distance": 42.11522447924998,
                          "elevation": 0
                      },
                      "id": "1965👉 219"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3897854,
                      -72.532665
                  ],
                  "osmId": 66708389,
                  "elevation": 59
              }
          },
          {
              "id": 2272,
              "links": [
                  {
                      "fromId": 219,
                      "toId": 2272,
                      "data": {
                          "distance": 30.935753399233338,
                          "elevation": 0
                      },
                      "id": "219👉 2272"
                  },
                  {
                      "fromId": 2272,
                      "toId": 219,
                      "data": {
                          "distance": 30.935753399233338,
                          "elevation": 0
                      },
                      "id": "2272👉 219"
                  },
                  {
                      "fromId": 2272,
                      "toId": 194,
                      "data": {
                          "distance": 77.67285770880883,
                          "elevation": 0
                      },
                      "id": "2272👉 194"
                  },
                  {
                      "fromId": 194,
                      "toId": 2272,
                      "data": {
                          "distance": 77.67285770880883,
                          "elevation": 0
                      },
                      "id": "194👉 2272"
                  },
                  {
                      "fromId": 2271,
                      "toId": 2272,
                      "data": {
                          "distance": 23.553770711501883,
                          "elevation": 0
                      },
                      "id": "2271👉 2272"
                  },
                  {
                      "fromId": 2272,
                      "toId": 2271,
                      "data": {
                          "distance": 23.553770711501883,
                          "elevation": 0
                      },
                      "id": "2272👉 2271"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3898527,
                      -72.5322995
                  ],
                  "osmId": 6371867080,
                  "elevation": 59
              }
          },
          {
              "id": 194,
              "links": [
                  {
                      "fromId": 2272,
                      "toId": 194,
                      "data": {
                          "distance": 77.67285770880883,
                          "elevation": 0
                      },
                      "id": "2272👉 194"
                  },
                  {
                      "fromId": 194,
                      "toId": 2272,
                      "data": {
                          "distance": 77.67285770880883,
                          "elevation": 0
                      },
                      "id": "194👉 2272"
                  },
                  {
                      "fromId": 194,
                      "toId": 611,
                      "data": {
                          "distance": 16.878280667010976,
                          "elevation": 0
                      },
                      "id": "194👉 611"
                  },
                  {
                      "fromId": 611,
                      "toId": 194,
                      "data": {
                          "distance": 16.878280667010976,
                          "elevation": 0
                      },
                      "id": "611👉 194"
                  },
                  {
                      "fromId": 194,
                      "toId": 298,
                      "data": {
                          "distance": 92.16675157160716,
                          "elevation": 11
                      },
                      "id": "194👉 298"
                  },
                  {
                      "fromId": 298,
                      "toId": 194,
                      "data": {
                          "distance": 92.16675157160716,
                          "elevation": -11
                      },
                      "id": "298👉 194"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.389779,
                      -72.531359
                  ],
                  "osmId": 66698331,
                  "elevation": 59
              }
          },
          {
              "id": 298,
              "links": [
                  {
                      "fromId": 2198,
                      "toId": 298,
                      "data": {
                          "distance": 10.142094921168471,
                          "elevation": 0
                      },
                      "id": "2198👉 298"
                  },
                  {
                      "fromId": 298,
                      "toId": 2198,
                      "data": {
                          "distance": 10.142094921168471,
                          "elevation": 0
                      },
                      "id": "298👉 2198"
                  },
                  {
                      "fromId": 194,
                      "toId": 298,
                      "data": {
                          "distance": 92.16675157160716,
                          "elevation": 11
                      },
                      "id": "194👉 298"
                  },
                  {
                      "fromId": 298,
                      "toId": 194,
                      "data": {
                          "distance": 92.16675157160716,
                          "elevation": -11
                      },
                      "id": "298👉 194"
                  },
                  {
                      "fromId": 298,
                      "toId": 156,
                      "data": {
                          "distance": 41.53735668851977,
                          "elevation": 0
                      },
                      "id": "298👉 156"
                  },
                  {
                      "fromId": 156,
                      "toId": 298,
                      "data": {
                          "distance": 41.53735668851977,
                          "elevation": 0
                      },
                      "id": "156👉 298"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3899358,
                      -72.530257
                  ],
                  "osmId": 66767369,
                  "elevation": 70
              }
          },
          {
              "id": 2198,
              "links": [
                  {
                      "fromId": 513,
                      "toId": 2198,
                      "data": {
                          "distance": 22.986065855663387,
                          "elevation": 0
                      },
                      "id": "513👉 2198"
                  },
                  {
                      "fromId": 2198,
                      "toId": 513,
                      "data": {
                          "distance": 22.986065855663387,
                          "elevation": 0
                      },
                      "id": "2198👉 513"
                  },
                  {
                      "fromId": 2198,
                      "toId": 298,
                      "data": {
                          "distance": 10.142094921168471,
                          "elevation": 0
                      },
                      "id": "2198👉 298"
                  },
                  {
                      "fromId": 298,
                      "toId": 2198,
                      "data": {
                          "distance": 10.142094921168471,
                          "elevation": 0
                      },
                      "id": "298👉 2198"
                  },
                  {
                      "fromId": 2198,
                      "toId": 2199,
                      "data": {
                          "distance": 3.8039046120564337,
                          "elevation": 0
                      },
                      "id": "2198👉 2199"
                  },
                  {
                      "fromId": 2199,
                      "toId": 2198,
                      "data": {
                          "distance": 3.8039046120564337,
                          "elevation": 0
                      },
                      "id": "2199👉 2198"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3898482,
                      -72.5302226
                  ],
                  "osmId": 6359546387,
                  "elevation": 70
              }
          },
          {
              "id": 513,
              "links": [
                  {
                      "fromId": 61,
                      "toId": 513,
                      "data": {
                          "distance": 15.213148172066521,
                          "elevation": 7
                      },
                      "id": "61👉 513"
                  },
                  {
                      "fromId": 513,
                      "toId": 61,
                      "data": {
                          "distance": 15.213148172066521,
                          "elevation": -7
                      },
                      "id": "513👉 61"
                  },
                  {
                      "fromId": 513,
                      "toId": 2198,
                      "data": {
                          "distance": 22.986065855663387,
                          "elevation": 0
                      },
                      "id": "513👉 2198"
                  },
                  {
                      "fromId": 2198,
                      "toId": 513,
                      "data": {
                          "distance": 22.986065855663387,
                          "elevation": 0
                      },
                      "id": "2198👉 513"
                  },
                  {
                      "fromId": 2213,
                      "toId": 513,
                      "data": {
                          "distance": 7.415200789145169,
                          "elevation": 0
                      },
                      "id": "2213👉 513"
                  },
                  {
                      "fromId": 513,
                      "toId": 2213,
                      "data": {
                          "distance": 7.415200789145169,
                          "elevation": 0
                      },
                      "id": "513👉 2213"
                  },
                  {
                      "fromId": 513,
                      "toId": 2203,
                      "data": {
                          "distance": 5.102133992302995,
                          "elevation": 0
                      },
                      "id": "513👉 2203"
                  },
                  {
                      "fromId": 2203,
                      "toId": 513,
                      "data": {
                          "distance": 5.102133992302995,
                          "elevation": 0
                      },
                      "id": "2203👉 513"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3896498,
                      -72.530144
                  ],
                  "osmId": 1445169849,
                  "elevation": 70
              }
          },
          {
              "id": 61,
              "links": [
                  {
                      "fromId": 735,
                      "toId": 61,
                      "data": {
                          "distance": 20.475476738315283,
                          "elevation": 0
                      },
                      "id": "735👉 61"
                  },
                  {
                      "fromId": 61,
                      "toId": 735,
                      "data": {
                          "distance": 20.475476738315283,
                          "elevation": 0
                      },
                      "id": "61👉 735"
                  },
                  {
                      "fromId": 61,
                      "toId": 513,
                      "data": {
                          "distance": 15.213148172066521,
                          "elevation": 7
                      },
                      "id": "61👉 513"
                  },
                  {
                      "fromId": 513,
                      "toId": 61,
                      "data": {
                          "distance": 15.213148172066521,
                          "elevation": -7
                      },
                      "id": "513👉 61"
                  },
                  {
                      "fromId": 61,
                      "toId": 2262,
                      "data": {
                          "distance": 7.568104731370429,
                          "elevation": 0
                      },
                      "id": "61👉 2262"
                  },
                  {
                      "fromId": 2262,
                      "toId": 61,
                      "data": {
                          "distance": 7.568104731370429,
                          "elevation": 0
                      },
                      "id": "2262👉 61"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3895184,
                      -72.5300924
                  ],
                  "osmId": 66610257,
                  "elevation": 63
              }
          },
          {
              "id": 735,
              "links": [
                  {
                      "fromId": 438,
                      "toId": 735,
                      "data": {
                          "distance": 18.747898413405174,
                          "elevation": 0
                      },
                      "id": "438👉 735"
                  },
                  {
                      "fromId": 735,
                      "toId": 438,
                      "data": {
                          "distance": 18.747898413405174,
                          "elevation": 0
                      },
                      "id": "735👉 438"
                  },
                  {
                      "fromId": 735,
                      "toId": 61,
                      "data": {
                          "distance": 20.475476738315283,
                          "elevation": 0
                      },
                      "id": "735👉 61"
                  },
                  {
                      "fromId": 61,
                      "toId": 735,
                      "data": {
                          "distance": 20.475476738315283,
                          "elevation": 0
                      },
                      "id": "61👉 735"
                  },
                  {
                      "fromId": 1521,
                      "toId": 735,
                      "data": {
                          "distance": 29.53410428334728,
                          "elevation": 0
                      },
                      "id": "1521👉 735"
                  },
                  {
                      "fromId": 735,
                      "toId": 1521,
                      "data": {
                          "distance": 29.53410428334728,
                          "elevation": 0
                      },
                      "id": "735👉 1521"
                  },
                  {
                      "fromId": 735,
                      "toId": 2261,
                      "data": {
                          "distance": 4.754900098701079,
                          "elevation": 0
                      },
                      "id": "735👉 2261"
                  },
                  {
                      "fromId": 2261,
                      "toId": 735,
                      "data": {
                          "distance": 4.754900098701079,
                          "elevation": 0
                      },
                      "id": "2261👉 735"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.389343,
                      -72.5300165
                  ],
                  "osmId": 1445170602,
                  "elevation": 63
              }
          },
          {
              "id": 1521,
              "links": [
                  {
                      "fromId": 1521,
                      "toId": 735,
                      "data": {
                          "distance": 29.53410428334728,
                          "elevation": 0
                      },
                      "id": "1521👉 735"
                  },
                  {
                      "fromId": 735,
                      "toId": 1521,
                      "data": {
                          "distance": 29.53410428334728,
                          "elevation": 0
                      },
                      "id": "735👉 1521"
                  },
                  {
                      "fromId": 438,
                      "toId": 1521,
                      "data": {
                          "distance": 23.380726284957188,
                          "elevation": 0
                      },
                      "id": "438👉 1521"
                  },
                  {
                      "fromId": 1521,
                      "toId": 438,
                      "data": {
                          "distance": 23.380726284957188,
                          "elevation": 0
                      },
                      "id": "1521👉 438"
                  },
                  {
                      "fromId": 1521,
                      "toId": 1523,
                      "data": {
                          "distance": 23.05303907329346,
                          "elevation": 0
                      },
                      "id": "1521👉 1523"
                  },
                  {
                      "fromId": 1523,
                      "toId": 1521,
                      "data": {
                          "distance": 23.05303907329346,
                          "elevation": 0
                      },
                      "id": "1523👉 1521"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3892523,
                      -72.5296785
                  ],
                  "osmId": 5588603955,
                  "elevation": 63
              }
          },
          {
              "id": 1523,
              "links": [
                  {
                      "fromId": 1523,
                      "toId": 468,
                      "data": {
                          "distance": 43.17917159971773,
                          "elevation": 0
                      },
                      "id": "1523👉 468"
                  },
                  {
                      "fromId": 468,
                      "toId": 1523,
                      "data": {
                          "distance": 43.17917159971773,
                          "elevation": 0
                      },
                      "id": "468👉 1523"
                  },
                  {
                      "fromId": 1521,
                      "toId": 1523,
                      "data": {
                          "distance": 23.05303907329346,
                          "elevation": 0
                      },
                      "id": "1521👉 1523"
                  },
                  {
                      "fromId": 1523,
                      "toId": 1521,
                      "data": {
                          "distance": 23.05303907329346,
                          "elevation": 0
                      },
                      "id": "1523👉 1521"
                  },
                  {
                      "fromId": 1523,
                      "toId": 2917,
                      "data": {
                          "distance": 4.388761974585763,
                          "elevation": 0
                      },
                      "id": "1523👉 2917"
                  },
                  {
                      "fromId": 2917,
                      "toId": 1523,
                      "data": {
                          "distance": 4.388761974585763,
                          "elevation": 0
                      },
                      "id": "2917👉 1523"
                  },
                  {
                      "fromId": 1523,
                      "toId": 2527,
                      "data": {
                          "distance": 25.83200939395995,
                          "elevation": 0
                      },
                      "id": "1523👉 2527"
                  },
                  {
                      "fromId": 2527,
                      "toId": 1523,
                      "data": {
                          "distance": 25.83200939395995,
                          "elevation": 0
                      },
                      "id": "2527👉 1523"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.389185,
                      -72.529413
                  ],
                  "osmId": 5588603961,
                  "elevation": 63
              }
          },
          {
              "id": 2917,
              "links": [
                  {
                      "fromId": 1523,
                      "toId": 2917,
                      "data": {
                          "distance": 4.388761974585763,
                          "elevation": 0
                      },
                      "id": "1523👉 2917"
                  },
                  {
                      "fromId": 2917,
                      "toId": 1523,
                      "data": {
                          "distance": 4.388761974585763,
                          "elevation": 0
                      },
                      "id": "2917👉 1523"
                  },
                  {
                      "fromId": 2917,
                      "toId": 1524,
                      "data": {
                          "distance": 27.882293772565642,
                          "elevation": 19
                      },
                      "id": "2917👉 1524"
                  },
                  {
                      "fromId": 1524,
                      "toId": 2917,
                      "data": {
                          "distance": 27.882293772565642,
                          "elevation": -19
                      },
                      "id": "1524👉 2917"
                  },
                  {
                      "fromId": 2916,
                      "toId": 2917,
                      "data": {
                          "distance": 6.356112323784774,
                          "elevation": 0
                      },
                      "id": "2916👉 2917"
                  },
                  {
                      "fromId": 2917,
                      "toId": 2916,
                      "data": {
                          "distance": 6.356112323784774,
                          "elevation": 0
                      },
                      "id": "2917👉 2916"
                  },
                  {
                      "fromId": 2917,
                      "toId": 2918,
                      "data": {
                          "distance": 4.000249513002855,
                          "elevation": 0
                      },
                      "id": "2917👉 2918"
                  },
                  {
                      "fromId": 2918,
                      "toId": 2917,
                      "data": {
                          "distance": 4.000249513002855,
                          "elevation": 0
                      },
                      "id": "2918👉 2917"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3891947,
                      -72.5293612
                  ],
                  "osmId": 8390506922,
                  "elevation": 63
              }
          },
          {
              "id": 1524,
              "links": [
                  {
                      "fromId": 1524,
                      "toId": 1520,
                      "data": {
                          "distance": 6.340485507338213,
                          "elevation": 0
                      },
                      "id": "1524👉 1520"
                  },
                  {
                      "fromId": 1520,
                      "toId": 1524,
                      "data": {
                          "distance": 6.340485507338213,
                          "elevation": 0
                      },
                      "id": "1520👉 1524"
                  },
                  {
                      "fromId": 2917,
                      "toId": 1524,
                      "data": {
                          "distance": 27.882293772565642,
                          "elevation": 19
                      },
                      "id": "2917👉 1524"
                  },
                  {
                      "fromId": 1524,
                      "toId": 2917,
                      "data": {
                          "distance": 27.882293772565642,
                          "elevation": -19
                      },
                      "id": "1524👉 2917"
                  },
                  {
                      "fromId": 1524,
                      "toId": 1519,
                      "data": {
                          "distance": 12.693345978993605,
                          "elevation": 0
                      },
                      "id": "1524👉 1519"
                  },
                  {
                      "fromId": 1519,
                      "toId": 1524,
                      "data": {
                          "distance": 12.693345978993605,
                          "elevation": 0
                      },
                      "id": "1519👉 1524"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3892563,
                      -72.5290321
                  ],
                  "osmId": 5588603962,
                  "elevation": 82
              }
          },
          {
              "id": 1520,
              "links": [
                  {
                      "fromId": 1524,
                      "toId": 1520,
                      "data": {
                          "distance": 6.340485507338213,
                          "elevation": 0
                      },
                      "id": "1524👉 1520"
                  },
                  {
                      "fromId": 1520,
                      "toId": 1524,
                      "data": {
                          "distance": 6.340485507338213,
                          "elevation": 0
                      },
                      "id": "1520👉 1524"
                  },
                  {
                      "fromId": 1520,
                      "toId": 445,
                      "data": {
                          "distance": 41.403902733647904,
                          "elevation": 0
                      },
                      "id": "1520👉 445"
                  },
                  {
                      "fromId": 445,
                      "toId": 1520,
                      "data": {
                          "distance": 41.403902733647904,
                          "elevation": 0
                      },
                      "id": "445👉 1520"
                  },
                  {
                      "fromId": 429,
                      "toId": 1520,
                      "data": {
                          "distance": 37.49591245840177,
                          "elevation": 0
                      },
                      "id": "429👉 1520"
                  },
                  {
                      "fromId": 1520,
                      "toId": 429,
                      "data": {
                          "distance": 37.49591245840177,
                          "elevation": 0
                      },
                      "id": "1520👉 429"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3892761,
                      -72.5289597
                  ],
                  "osmId": 5588603954,
                  "elevation": 82
              }
          },
          {
              "id": 445,
              "links": [
                  {
                      "fromId": 1520,
                      "toId": 445,
                      "data": {
                          "distance": 41.403902733647904,
                          "elevation": 0
                      },
                      "id": "1520👉 445"
                  },
                  {
                      "fromId": 445,
                      "toId": 1520,
                      "data": {
                          "distance": 41.403902733647904,
                          "elevation": 0
                      },
                      "id": "445👉 1520"
                  },
                  {
                      "fromId": 429,
                      "toId": 445,
                      "data": {
                          "distance": 42.738616088143644,
                          "elevation": 0
                      },
                      "id": "429👉 445"
                  },
                  {
                      "fromId": 445,
                      "toId": 429,
                      "data": {
                          "distance": 42.738616088143644,
                          "elevation": 0
                      },
                      "id": "445👉 429"
                  },
                  {
                      "fromId": 445,
                      "toId": 2251,
                      "data": {
                          "distance": 6.6762099194315825,
                          "elevation": 0
                      },
                      "id": "445👉 2251"
                  },
                  {
                      "fromId": 2251,
                      "toId": 445,
                      "data": {
                          "distance": 6.6762099194315825,
                          "elevation": 0
                      },
                      "id": "2251👉 445"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3893661,
                      -72.5284705
                  ],
                  "osmId": 1443766417,
                  "elevation": 82
              }
          },
          {
              "id": 2251,
              "links": [
                  {
                      "fromId": 2247,
                      "toId": 2251,
                      "data": {
                          "distance": 21.724804771398134,
                          "elevation": 0
                      },
                      "id": "2247👉 2251"
                  },
                  {
                      "fromId": 2251,
                      "toId": 2247,
                      "data": {
                          "distance": 21.724804771398134,
                          "elevation": 0
                      },
                      "id": "2251👉 2247"
                  },
                  {
                      "fromId": 2251,
                      "toId": 461,
                      "data": {
                          "distance": 19.71297680896107,
                          "elevation": 0
                      },
                      "id": "2251👉 461"
                  },
                  {
                      "fromId": 461,
                      "toId": 2251,
                      "data": {
                          "distance": 19.71297680896107,
                          "elevation": 0
                      },
                      "id": "461👉 2251"
                  },
                  {
                      "fromId": 445,
                      "toId": 2251,
                      "data": {
                          "distance": 6.6762099194315825,
                          "elevation": 0
                      },
                      "id": "445👉 2251"
                  },
                  {
                      "fromId": 2251,
                      "toId": 445,
                      "data": {
                          "distance": 6.6762099194315825,
                          "elevation": 0
                      },
                      "id": "2251👉 445"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3893817,
                      -72.528392
                  ],
                  "osmId": 6359546604,
                  "elevation": 82
              }
          },
          {
              "id": 2247,
              "links": [
                  {
                      "fromId": 374,
                      "toId": 2247,
                      "data": {
                          "distance": 16.39854401059604,
                          "elevation": 0
                      },
                      "id": "374👉 2247"
                  },
                  {
                      "fromId": 2247,
                      "toId": 374,
                      "data": {
                          "distance": 16.39854401059604,
                          "elevation": 0
                      },
                      "id": "2247👉 374"
                  },
                  {
                      "fromId": 2247,
                      "toId": 2251,
                      "data": {
                          "distance": 21.724804771398134,
                          "elevation": 0
                      },
                      "id": "2247👉 2251"
                  },
                  {
                      "fromId": 2251,
                      "toId": 2247,
                      "data": {
                          "distance": 21.724804771398134,
                          "elevation": 0
                      },
                      "id": "2251👉 2247"
                  },
                  {
                      "fromId": 351,
                      "toId": 2247,
                      "data": {
                          "distance": 50.08259780410291,
                          "elevation": 0
                      },
                      "id": "351👉 2247"
                  },
                  {
                      "fromId": 2247,
                      "toId": 351,
                      "data": {
                          "distance": 50.08259780410291,
                          "elevation": 0
                      },
                      "id": "2247👉 351"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3891959,
                      -72.5283102
                  ],
                  "osmId": 6359546593,
                  "elevation": 82
              }
          },
          {
              "id": 351,
              "links": [
                  {
                      "fromId": 448,
                      "toId": 351,
                      "data": {
                          "distance": 41.83665623186965,
                          "elevation": 6
                      },
                      "id": "448👉 351"
                  },
                  {
                      "fromId": 351,
                      "toId": 448,
                      "data": {
                          "distance": 41.83665623186965,
                          "elevation": -6
                      },
                      "id": "351👉 448"
                  },
                  {
                      "fromId": 351,
                      "toId": 2921,
                      "data": {
                          "distance": 10.646265505819098,
                          "elevation": 0
                      },
                      "id": "351👉 2921"
                  },
                  {
                      "fromId": 2921,
                      "toId": 351,
                      "data": {
                          "distance": 10.646265505819098,
                          "elevation": 0
                      },
                      "id": "2921👉 351"
                  },
                  {
                      "fromId": 351,
                      "toId": 2247,
                      "data": {
                          "distance": 50.08259780410291,
                          "elevation": 0
                      },
                      "id": "351👉 2247"
                  },
                  {
                      "fromId": 2247,
                      "toId": 351,
                      "data": {
                          "distance": 50.08259780410291,
                          "elevation": 0
                      },
                      "id": "2247👉 351"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3893268,
                      -72.5277267
                  ],
                  "osmId": 1439024823,
                  "elevation": 82
              }
          },
          {
              "id": 2921,
              "links": [
                  {
                      "fromId": 351,
                      "toId": 2921,
                      "data": {
                          "distance": 10.646265505819098,
                          "elevation": 0
                      },
                      "id": "351👉 2921"
                  },
                  {
                      "fromId": 2921,
                      "toId": 351,
                      "data": {
                          "distance": 10.646265505819098,
                          "elevation": 0
                      },
                      "id": "2921👉 351"
                  },
                  {
                      "fromId": 2921,
                      "toId": 2919,
                      "data": {
                          "distance": 5.945822136222303,
                          "elevation": 0
                      },
                      "id": "2921👉 2919"
                  },
                  {
                      "fromId": 2919,
                      "toId": 2921,
                      "data": {
                          "distance": 5.945822136222303,
                          "elevation": 0
                      },
                      "id": "2919👉 2921"
                  },
                  {
                      "fromId": 2921,
                      "toId": 2922,
                      "data": {
                          "distance": 24.282175891213257,
                          "elevation": 0
                      },
                      "id": "2921👉 2922"
                  },
                  {
                      "fromId": 2922,
                      "toId": 2921,
                      "data": {
                          "distance": 24.282175891213257,
                          "elevation": 0
                      },
                      "id": "2922👉 2921"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3892358,
                      -72.5276864
                  ],
                  "osmId": 8390506945,
                  "elevation": 82
              }
          },
          {
              "id": 2919,
              "links": [
                  {
                      "fromId": 2921,
                      "toId": 2919,
                      "data": {
                          "distance": 5.945822136222303,
                          "elevation": 0
                      },
                      "id": "2921👉 2919"
                  },
                  {
                      "fromId": 2919,
                      "toId": 2921,
                      "data": {
                          "distance": 5.945822136222303,
                          "elevation": 0
                      },
                      "id": "2919👉 2921"
                  },
                  {
                      "fromId": 2919,
                      "toId": 390,
                      "data": {
                          "distance": 32.69980308547149,
                          "elevation": 0
                      },
                      "id": "2919👉 390"
                  },
                  {
                      "fromId": 390,
                      "toId": 2919,
                      "data": {
                          "distance": 32.69980308547149,
                          "elevation": 0
                      },
                      "id": "390👉 2919"
                  },
                  {
                      "fromId": 2919,
                      "toId": 2920,
                      "data": {
                          "distance": 26.831758104302658,
                          "elevation": 0
                      },
                      "id": "2919👉 2920"
                  },
                  {
                      "fromId": 2920,
                      "toId": 2919,
                      "data": {
                          "distance": 26.831758104302658,
                          "elevation": 0
                      },
                      "id": "2920👉 2919"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.389185,
                      -72.5276638
                  ],
                  "osmId": 8390506939,
                  "elevation": 82
              }
          },
          {
              "id": 390,
              "links": [
                  {
                      "fromId": 2919,
                      "toId": 390,
                      "data": {
                          "distance": 32.69980308547149,
                          "elevation": 0
                      },
                      "id": "2919👉 390"
                  },
                  {
                      "fromId": 390,
                      "toId": 2919,
                      "data": {
                          "distance": 32.69980308547149,
                          "elevation": 0
                      },
                      "id": "390👉 2919"
                  },
                  {
                      "fromId": 390,
                      "toId": 1251,
                      "data": {
                          "distance": 9.082416225877342,
                          "elevation": 0
                      },
                      "id": "390👉 1251"
                  },
                  {
                      "fromId": 1251,
                      "toId": 390,
                      "data": {
                          "distance": 9.082416225877342,
                          "elevation": 0
                      },
                      "id": "1251👉 390"
                  },
                  {
                      "fromId": 410,
                      "toId": 390,
                      "data": {
                          "distance": 15.721341075474255,
                          "elevation": 0
                      },
                      "id": "410👉 390"
                  },
                  {
                      "fromId": 390,
                      "toId": 410,
                      "data": {
                          "distance": 15.721341075474255,
                          "elevation": 0
                      },
                      "id": "390👉 410"
                  },
                  {
                      "fromId": 390,
                      "toId": 370,
                      "data": {
                          "distance": 9.492121392885,
                          "elevation": 0
                      },
                      "id": "390👉 370"
                  },
                  {
                      "fromId": 370,
                      "toId": 390,
                      "data": {
                          "distance": 9.492121392885,
                          "elevation": 0
                      },
                      "id": "370👉 390"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3889055,
                      -72.52754
                  ],
                  "osmId": 1439024952,
                  "elevation": 82
              }
          },
          {
              "id": 1251,
              "links": [
                  {
                      "fromId": 390,
                      "toId": 1251,
                      "data": {
                          "distance": 9.082416225877342,
                          "elevation": 0
                      },
                      "id": "390👉 1251"
                  },
                  {
                      "fromId": 1251,
                      "toId": 390,
                      "data": {
                          "distance": 9.082416225877342,
                          "elevation": 0
                      },
                      "id": "1251👉 390"
                  },
                  {
                      "fromId": 396,
                      "toId": 1251,
                      "data": {
                          "distance": 4.737955700691547,
                          "elevation": 0
                      },
                      "id": "396👉 1251"
                  },
                  {
                      "fromId": 1251,
                      "toId": 396,
                      "data": {
                          "distance": 4.737955700691547,
                          "elevation": 0
                      },
                      "id": "1251👉 396"
                  },
                  {
                      "fromId": 1251,
                      "toId": 370,
                      "data": {
                          "distance": 8.025023461439826,
                          "elevation": 0
                      },
                      "id": "1251👉 370"
                  },
                  {
                      "fromId": 370,
                      "toId": 1251,
                      "data": {
                          "distance": 8.025023461439826,
                          "elevation": 0
                      },
                      "id": "370👉 1251"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3888268,
                      -72.5275104
                  ],
                  "osmId": 4276779889,
                  "elevation": 82
              }
          },
          {
              "id": 396,
              "links": [
                  {
                      "fromId": 2246,
                      "toId": 396,
                      "data": {
                          "distance": 6.630461766811947,
                          "elevation": 0
                      },
                      "id": "2246👉 396"
                  },
                  {
                      "fromId": 396,
                      "toId": 2246,
                      "data": {
                          "distance": 6.630461766811947,
                          "elevation": 0
                      },
                      "id": "396👉 2246"
                  },
                  {
                      "fromId": 1997,
                      "toId": 396,
                      "data": {
                          "distance": 47.95669230118157,
                          "elevation": 0
                      },
                      "id": "1997👉 396"
                  },
                  {
                      "fromId": 396,
                      "toId": 1997,
                      "data": {
                          "distance": 47.95669230118157,
                          "elevation": 0
                      },
                      "id": "396👉 1997"
                  },
                  {
                      "fromId": 396,
                      "toId": 1251,
                      "data": {
                          "distance": 4.737955700691547,
                          "elevation": 0
                      },
                      "id": "396👉 1251"
                  },
                  {
                      "fromId": 1251,
                      "toId": 396,
                      "data": {
                          "distance": 4.737955700691547,
                          "elevation": 0
                      },
                      "id": "1251👉 396"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3887952,
                      -72.5274717
                  ],
                  "osmId": 1439024965,
                  "elevation": 82
              }
          },
          {
              "id": 2246,
              "links": [
                  {
                      "fromId": 358,
                      "toId": 2246,
                      "data": {
                          "distance": 17.67451476945222,
                          "elevation": 0
                      },
                      "id": "358👉 2246"
                  },
                  {
                      "fromId": 2246,
                      "toId": 358,
                      "data": {
                          "distance": 17.67451476945222,
                          "elevation": 0
                      },
                      "id": "2246👉 358"
                  },
                  {
                      "fromId": 2246,
                      "toId": 396,
                      "data": {
                          "distance": 6.630461766811947,
                          "elevation": 0
                      },
                      "id": "2246👉 396"
                  },
                  {
                      "fromId": 396,
                      "toId": 2246,
                      "data": {
                          "distance": 6.630461766811947,
                          "elevation": 0
                      },
                      "id": "396👉 2246"
                  },
                  {
                      "fromId": 2246,
                      "toId": 410,
                      "data": {
                          "distance": 25.73260301433335,
                          "elevation": 0
                      },
                      "id": "2246👉 410"
                  },
                  {
                      "fromId": 410,
                      "toId": 2246,
                      "data": {
                          "distance": 25.73260301433335,
                          "elevation": 0
                      },
                      "id": "410👉 2246"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3887717,
                      -72.5273975
                  ],
                  "osmId": 6359546591,
                  "elevation": 82
              }
          },
          {
              "id": 358,
              "links": [
                  {
                      "fromId": 407,
                      "toId": 358,
                      "data": {
                          "distance": 37.02802152766955,
                          "elevation": 13
                      },
                      "id": "407👉 358"
                  },
                  {
                      "fromId": 358,
                      "toId": 407,
                      "data": {
                          "distance": 37.02802152766955,
                          "elevation": -13
                      },
                      "id": "358👉 407"
                  },
                  {
                      "fromId": 358,
                      "toId": 2246,
                      "data": {
                          "distance": 17.67451476945222,
                          "elevation": 0
                      },
                      "id": "358👉 2246"
                  },
                  {
                      "fromId": 2246,
                      "toId": 358,
                      "data": {
                          "distance": 17.67451476945222,
                          "elevation": 0
                      },
                      "id": "2246👉 358"
                  },
                  {
                      "fromId": 369,
                      "toId": 358,
                      "data": {
                          "distance": 51.86561787236188,
                          "elevation": 0
                      },
                      "id": "369👉 358"
                  },
                  {
                      "fromId": 358,
                      "toId": 369,
                      "data": {
                          "distance": 51.86561787236188,
                          "elevation": 0
                      },
                      "id": "358👉 369"
                  },
                  {
                      "fromId": 358,
                      "toId": 1997,
                      "data": {
                          "distance": 34.775933506988416,
                          "elevation": 0
                      },
                      "id": "358👉 1997"
                  },
                  {
                      "fromId": 1997,
                      "toId": 358,
                      "data": {
                          "distance": 34.775933506988416,
                          "elevation": 0
                      },
                      "id": "1997👉 358"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3887089,
                      -72.5271998
                  ],
                  "osmId": 1439024847,
                  "elevation": 82
              }
          },
          {
              "id": 407,
              "links": [
                  {
                      "fromId": 407,
                      "toId": 358,
                      "data": {
                          "distance": 37.02802152766955,
                          "elevation": 13
                      },
                      "id": "407👉 358"
                  },
                  {
                      "fromId": 358,
                      "toId": 407,
                      "data": {
                          "distance": 37.02802152766955,
                          "elevation": -13
                      },
                      "id": "358👉 407"
                  },
                  {
                      "fromId": 387,
                      "toId": 407,
                      "data": {
                          "distance": 10.301875121186415,
                          "elevation": 0
                      },
                      "id": "387👉 407"
                  },
                  {
                      "fromId": 407,
                      "toId": 387,
                      "data": {
                          "distance": 10.301875121186415,
                          "elevation": 0
                      },
                      "id": "407👉 387"
                  },
                  {
                      "fromId": 407,
                      "toId": 415,
                      "data": {
                          "distance": 84.35117560403765,
                          "elevation": 13
                      },
                      "id": "407👉 415"
                  },
                  {
                      "fromId": 415,
                      "toId": 407,
                      "data": {
                          "distance": 84.35117560403765,
                          "elevation": -13
                      },
                      "id": "415👉 407"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3885226,
                      -72.5268261
                  ],
                  "osmId": 1439025014,
                  "elevation": 69
              }
          },
          {
              "id": 387,
              "links": [
                  {
                      "fromId": 387,
                      "toId": 449,
                      "data": {
                          "distance": 4.336781781086911,
                          "elevation": 0
                      },
                      "id": "387👉 449"
                  },
                  {
                      "fromId": 449,
                      "toId": 387,
                      "data": {
                          "distance": 4.336781781086911,
                          "elevation": 0
                      },
                      "id": "449👉 387"
                  },
                  {
                      "fromId": 436,
                      "toId": 387,
                      "data": {
                          "distance": 43.39577539181217,
                          "elevation": 0
                      },
                      "id": "436👉 387"
                  },
                  {
                      "fromId": 387,
                      "toId": 436,
                      "data": {
                          "distance": 43.39577539181217,
                          "elevation": 0
                      },
                      "id": "387👉 436"
                  },
                  {
                      "fromId": 387,
                      "toId": 407,
                      "data": {
                          "distance": 10.301875121186415,
                          "elevation": 0
                      },
                      "id": "387👉 407"
                  },
                  {
                      "fromId": 407,
                      "toId": 387,
                      "data": {
                          "distance": 10.301875121186415,
                          "elevation": 0
                      },
                      "id": "407👉 387"
                  },
                  {
                      "fromId": 387,
                      "toId": 2687,
                      "data": {
                          "distance": 39.03990622105558,
                          "elevation": 13
                      },
                      "id": "387👉 2687"
                  },
                  {
                      "fromId": 2687,
                      "toId": 387,
                      "data": {
                          "distance": 39.03990622105558,
                          "elevation": -13
                      },
                      "id": "2687👉 387"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3884447,
                      -72.5267582
                  ],
                  "osmId": 1439024942,
                  "elevation": 69
              }
          },
          {
              "id": 436,
              "links": [
                  {
                      "fromId": 167,
                      "toId": 436,
                      "data": {
                          "distance": 11.754215826689109,
                          "elevation": 0
                      },
                      "id": "167👉 436"
                  },
                  {
                      "fromId": 436,
                      "toId": 167,
                      "data": {
                          "distance": 11.754215826689109,
                          "elevation": 0
                      },
                      "id": "436👉 167"
                  },
                  {
                      "fromId": 436,
                      "toId": 387,
                      "data": {
                          "distance": 43.39577539181217,
                          "elevation": 0
                      },
                      "id": "436👉 387"
                  },
                  {
                      "fromId": 387,
                      "toId": 436,
                      "data": {
                          "distance": 43.39577539181217,
                          "elevation": 0
                      },
                      "id": "387👉 436"
                  },
                  {
                      "fromId": 383,
                      "toId": 436,
                      "data": {
                          "distance": 13.600594889045343,
                          "elevation": 0
                      },
                      "id": "383👉 436"
                  },
                  {
                      "fromId": 436,
                      "toId": 383,
                      "data": {
                          "distance": 13.600594889045343,
                          "elevation": 0
                      },
                      "id": "436👉 383"
                  },
                  {
                      "fromId": 436,
                      "toId": 3250,
                      "data": {
                          "distance": 91.66002359832268,
                          "elevation": 0
                      },
                      "id": "436👉 3250"
                  },
                  {
                      "fromId": 3250,
                      "toId": 436,
                      "data": {
                          "distance": 91.66002359832268,
                          "elevation": 0
                      },
                      "id": "3250👉 436"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3884674,
                      -72.5262307
                  ],
                  "osmId": 1443766378,
                  "elevation": 69
              }
          },
          {
              "id": 3250,
              "links": [
                  {
                      "fromId": 436,
                      "toId": 3250,
                      "data": {
                          "distance": 91.66002359832268,
                          "elevation": 0
                      },
                      "id": "436👉 3250"
                  },
                  {
                      "fromId": 3250,
                      "toId": 436,
                      "data": {
                          "distance": 91.66002359832268,
                          "elevation": 0
                      },
                      "id": "3250👉 436"
                  },
                  {
                      "fromId": 3250,
                      "toId": 256,
                      "data": {
                          "distance": 26.117645035557008,
                          "elevation": 0
                      },
                      "id": "3250👉 256"
                  },
                  {
                      "fromId": 256,
                      "toId": 3250,
                      "data": {
                          "distance": 26.117645035557008,
                          "elevation": 0
                      },
                      "id": "256👉 3250"
                  },
                  {
                      "fromId": 3250,
                      "toId": 3251,
                      "data": {
                          "distance": 35.637578091852504,
                          "elevation": 0
                      },
                      "id": "3250👉 3251"
                  },
                  {
                      "fromId": 3251,
                      "toId": 3250,
                      "data": {
                          "distance": 35.637578091852504,
                          "elevation": 0
                      },
                      "id": "3251👉 3250"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3889394,
                      -72.5253157
                  ],
                  "osmId": 9059431718,
                  "elevation": 69
              }
          },
          {
              "id": 256,
              "links": [
                  {
                      "fromId": 256,
                      "toId": 2504,
                      "data": {
                          "distance": 23.993329266089766,
                          "elevation": 13
                      },
                      "id": "256👉 2504"
                  },
                  {
                      "fromId": 2504,
                      "toId": 256,
                      "data": {
                          "distance": 23.993329266089766,
                          "elevation": -13
                      },
                      "id": "2504👉 256"
                  },
                  {
                      "fromId": 3250,
                      "toId": 256,
                      "data": {
                          "distance": 26.117645035557008,
                          "elevation": 0
                      },
                      "id": "3250👉 256"
                  },
                  {
                      "fromId": 256,
                      "toId": 3250,
                      "data": {
                          "distance": 26.117645035557008,
                          "elevation": 0
                      },
                      "id": "256👉 3250"
                  },
                  {
                      "fromId": 256,
                      "toId": 469,
                      "data": {
                          "distance": 28.007246325244747,
                          "elevation": 13
                      },
                      "id": "256👉 469"
                  },
                  {
                      "fromId": 469,
                      "toId": 256,
                      "data": {
                          "distance": 28.007246325244747,
                          "elevation": -13
                      },
                      "id": "469👉 256"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.389082,
                      -72.525063
                  ],
                  "osmId": 66726844,
                  "elevation": 69
              }
          },
          {
              "id": 469,
              "links": [
                  {
                      "fromId": 488,
                      "toId": 469,
                      "data": {
                          "distance": 45.73679897239716,
                          "elevation": 0
                      },
                      "id": "488👉 469"
                  },
                  {
                      "fromId": 469,
                      "toId": 488,
                      "data": {
                          "distance": 45.73679897239716,
                          "elevation": 0
                      },
                      "id": "469👉 488"
                  },
                  {
                      "fromId": 256,
                      "toId": 469,
                      "data": {
                          "distance": 28.007246325244747,
                          "elevation": 13
                      },
                      "id": "256👉 469"
                  },
                  {
                      "fromId": 469,
                      "toId": 256,
                      "data": {
                          "distance": 28.007246325244747,
                          "elevation": -13
                      },
                      "id": "469👉 256"
                  },
                  {
                      "fromId": 469,
                      "toId": 111,
                      "data": {
                          "distance": 7.535118052809279,
                          "elevation": 0
                      },
                      "id": "469👉 111"
                  },
                  {
                      "fromId": 111,
                      "toId": 469,
                      "data": {
                          "distance": 7.535118052809279,
                          "elevation": 0
                      },
                      "id": "111👉 469"
                  },
                  {
                      "fromId": 71,
                      "toId": 469,
                      "data": {
                          "distance": 17.768959939035017,
                          "elevation": 0
                      },
                      "id": "71👉 469"
                  },
                  {
                      "fromId": 469,
                      "toId": 71,
                      "data": {
                          "distance": 17.768959939035017,
                          "elevation": 0
                      },
                      "id": "469👉 71"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3890202,
                      -72.5247324
                  ],
                  "osmId": 1443766530,
                  "elevation": 82
              }
          },
          {
              "id": 488,
              "links": [
                  {
                      "fromId": 332,
                      "toId": 488,
                      "data": {
                          "distance": 22.81891720584366,
                          "elevation": 0
                      },
                      "id": "332👉 488"
                  },
                  {
                      "fromId": 488,
                      "toId": 332,
                      "data": {
                          "distance": 22.81891720584366,
                          "elevation": 0
                      },
                      "id": "488👉 332"
                  },
                  {
                      "fromId": 488,
                      "toId": 469,
                      "data": {
                          "distance": 45.73679897239716,
                          "elevation": 0
                      },
                      "id": "488👉 469"
                  },
                  {
                      "fromId": 469,
                      "toId": 488,
                      "data": {
                          "distance": 45.73679897239716,
                          "elevation": 0
                      },
                      "id": "469👉 488"
                  },
                  {
                      "fromId": 488,
                      "toId": 472,
                      "data": {
                          "distance": 3.0750221819018955,
                          "elevation": 0
                      },
                      "id": "488👉 472"
                  },
                  {
                      "fromId": 472,
                      "toId": 488,
                      "data": {
                          "distance": 3.0750221819018955,
                          "elevation": 0
                      },
                      "id": "472👉 488"
                  },
                  {
                      "fromId": 220,
                      "toId": 488,
                      "data": {
                          "distance": 5.52902973553253,
                          "elevation": 0
                      },
                      "id": "220👉 488"
                  },
                  {
                      "fromId": 488,
                      "toId": 220,
                      "data": {
                          "distance": 5.52902973553253,
                          "elevation": 0
                      },
                      "id": "488👉 220"
                  }
              ],
              "data": {
                  "coordinates": [
                      42.3886338,
                      -72.5245415
                  ],
                  "osmId": 1443766625,
                  "elevation": 82
              }
          }
      ],
        viewport: {
            width: '74vw',
            height: '100vh',
            latitude: 42.373222,
            longitude: -72.519852,
            zoom: 12,
        },
      };
      this.updateIndex = this.updateIndex.bind(this);
    }

    getColor(start, end) {
      const diff = start - end;
      if (diff > 5) {
        return 'blue';
      } else if (diff > 0) {
        return 'green';
      } else if (diff > -3) {
        return 'yellow';
      } else if (diff>-6) {
        return 'orange';
      } else {
        return 'red';
      }
    }
  
    updateIndex(index){
      this.setState({currentIndex: index});
    }
  
    render() {
      const { viewport } = this.state;
  
      return (
        <>
          <ReactMapGL
            id="map"
            {...viewport}
            onViewportChange={(viewport) => this.setState({ viewport })}
            mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_MAPTILLER_API_KEY}`}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          >
            <ScaleControl maxWidth={100} unit={'imperial'} />
            <Marker
                    key={1}
                    latitude={42.4580719}
                    longitude={-72.584526}
                    offsetTop={-32}
                    offsetLeft={-18}
                    anchor="bottom"
            >
              <div className="initial-markers"></div>
            </Marker>
            <Marker
                    key={2}
                    latitude={42.388543}
                    longitude={-72.524589}
                    offsetTop={-32}
                    offsetLeft={-18}
                    anchor="bottom"
            >
              <div className="initial-markers"></div>
            </Marker>
            {this.state.path.length>0 && this.state.path.map(
              (element) => (
                <Marker
                    key={element.id}
                    latitude={element.data.coordinates[0]}
                    longitude={element.data.coordinates[1]}
                    offsetTop={-32}
                    offsetLeft={-18}
                    anchor="bottom"
                >
                  <div className="middle-markers"></div>
                </Marker>
              )
            )}
          </ReactMapGL>
        </>
      );
    }
  }
  