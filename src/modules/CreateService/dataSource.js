var uuid = guid();
function guid() {
  function random() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
}

const dataSource = [
  {
    id: guid(),
    packageName: 'Wooden',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },
  {
    id: guid(),
    packageName: 'Wooden',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },
  {
    id: guid(),
    packageName: 'Wooden',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },
  {
    id: guid(),
    packageName: 'Wooden',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
    ]
  },
]

export default dataSource;