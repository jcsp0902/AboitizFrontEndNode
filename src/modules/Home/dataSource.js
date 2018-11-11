var uuid = guid();
function guid() {
  function random() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
}

export const packages = [
  {
    id: 1,
    packageName: '1',
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
    id: 2,
    packageName: '2',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "2 Outlet",
      "2 Wirings",
    ]
  },
  {
    id: 3,
    packageName: '3',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "5 Lights",
      "5 Outlet",
      "4 Wirings",
    ]
  },
  {
    id: 4,
    packageName: '4',
    status: "Pending",
    location: "3008 Lapidsville Tambuong, Pampanga, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "3 Lights",
      "5 Outlet",
    ]
  },
  {
    id: 5,
    packageName: '5',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
    ]
  }
]

export const dataSource = [
  {
    id: 1,
    applicationId: 1,
    packageName: '1',
    status: "Pending",
    location: "Blk 10 Lot 18 Taas, Pulilan, Bulacan",
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
    id: 1,
    packageName: '1',
    applicationId: 2,
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
    id: 1,
    packageName: '1',
    status: "Pending",
    location: "4010 Test Village Blk 10 Lot 30 Pagudpod, Candaba, Pampanga",
    packagePrice: 10000,
    service: "Installation",
    applicationId: 3,
    type: "All In",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },
]