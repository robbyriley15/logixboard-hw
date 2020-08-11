export type Shipment = {
  "Shipment ID": string,
  "Client Name": string,
  "Origin": string,
  "Destination": string,
  "Mode": string,
  "Estimated Departure": string,
  "Estimated Arrival": string,
  "Status": string,
  [key: string]: string
}

export const shipmentData: Shipment[] = [
    {
      "Shipment ID": "da9e36cb-4175-446b-97e7-8bdc8d6dbfc8",
      "Client Name": "Broko",
      "Origin": "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      "Destination": "190 45 Stockholm-Arlanda, Sweden",
      "Mode": "Rail ",
      "Estimated Departure": "4/19/19",
      "Estimated Arrival": "5/21/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "7c6124c8-8639-4ec7-bc21-4a772715659c",
      "Client Name": "Broko",
      "Origin": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Destination": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Mode": "Air ",
      "Estimated Departure": "3/28/19",
      "Estimated Arrival": "4/21/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "574bb6f8-4bf6-4e60-9e41-e596c197e4e0",
      "Client Name": "The Pike Brewing Company",
      "Origin": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Destination": "482 Pier T Ave, Long Beach, CA 90802",
      "Mode": "Sea ",
      "Estimated Departure": "2/10/19",
      "Estimated Arrival": "3/7/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "d8525b5d-057c-4724-9901-45d6d10be100",
      "Client Name": "The Pike Brewing Company",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "482 Pier T Ave, Long Beach, CA 90802",
      "Mode": "Sea ",
      "Estimated Departure": "3/15/19",
      "Estimated Arrival": "4/16/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "b0ed72fa-05f5-4128-ac94-064577d6fc8d",
      "Client Name": "REI Seattle Flagship Store",
      "Origin": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Destination": "Port of Los Angeles Los Angeles, CA",
      "Mode": "Rail ",
      "Estimated Departure": "4/24/19",
      "Estimated Arrival": "5/25/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "5c697cb3-8acd-423c-b815-5e3d6dc1c7b4",
      "Client Name": "Alarwi",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Rail ",
      "Estimated Departure": "1/24/19",
      "Estimated Arrival": "2/21/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "04e04f30-8df0-4136-ad9a-9d63087e4c6c",
      "Client Name": "Speedy Groceries",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Mode": "Air ",
      "Estimated Departure": "3/1/19",
      "Estimated Arrival": "4/1/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "400a67dd-b0ef-48f0-8b6f-d7bec3ed2123",
      "Client Name": "Broko",
      "Origin": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Destination": "95700 Roissy-en-France, France",
      "Mode": "Sea ",
      "Estimated Departure": "4/25/19",
      "Estimated Arrival": "5/26/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "e398991c-6ad6-4255-a656-5b00ed965b42",
      "Client Name": "Alarwi",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "10000 W O'Hare Ave, Chicago, IL 60666",
      "Mode": "Air ",
      "Estimated Departure": "2/21/19",
      "Estimated Arrival": "3/19/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "214d9a7f-6eb3-4db3-80b9-66377f395309",
      "Client Name": "Speedy Groceries",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "10000 W O'Hare Ave, Chicago, IL 60666",
      "Mode": "Air ",
      "Estimated Departure": "1/13/19",
      "Estimated Arrival": "2/7/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "6e5ade3a-fd7b-4f8b-b33d-f6d81dfb5440",
      "Client Name": "The Pike Brewing Company",
      "Origin": "190 45 Stockholm-Arlanda, Sweden",
      "Destination": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Mode": "Sea ",
      "Estimated Departure": "3/22/19",
      "Estimated Arrival": "4/15/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "cbb3c448-6fff-46bd-bacf-0afea03f38b3",
      "Client Name": "Microsoft",
      "Origin": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Destination": "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      "Mode": "Rail ",
      "Estimated Departure": "4/13/19",
      "Estimated Arrival": "5/7/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "d9be1e99-1874-4ffe-8318-bd9de6bd3376",
      "Client Name": "The Pike Brewing Company",
      "Origin": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Destination": "Victoria Harbour 維多利亞港 Hong Kong",
      "Mode": "Rail ",
      "Estimated Departure": "4/11/19",
      "Estimated Arrival": "5/12/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "44e4a277-38b5-4a00-908b-cb45c51a4de2",
      "Client Name": "Microsoft",
      "Origin": "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      "Destination": "482 Pier T Ave, Long Beach, CA 90802",
      "Mode": "Sea ",
      "Estimated Departure": "2/17/19",
      "Estimated Arrival": "3/18/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "abe87d4c-31a0-4451-96eb-8a83974a76ba",
      "Client Name": "Speedy Groceries",
      "Origin": "201 Edgewater St, Staten Island, NY 10305",
      "Destination": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Mode": "Air ",
      "Estimated Departure": "2/10/19",
      "Estimated Arrival": "3/6/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "4dc909f8-a352-41e5-bca9-0bec9809109d",
      "Client Name": "Tesla",
      "Origin": "482 Pier T Ave, Long Beach, CA 90802",
      "Destination": "190 45 Stockholm-Arlanda, Sweden",
      "Mode": "Air ",
      "Estimated Departure": "4/21/19",
      "Estimated Arrival": "5/23/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "5aa199f0-9761-450f-aa23-4e991b9002db",
      "Client Name": "Sapphire Running",
      "Origin": "7-4 Deptford Rd, Singapore 759657",
      "Destination": "Port of Los Angeles Los Angeles, CA",
      "Mode": "Sea ",
      "Estimated Departure": "4/27/19",
      "Estimated Arrival": "5/27/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "52a453b2-015d-44c2-a165-87d1f3e04315",
      "Client Name": "Dendreon Pharmaceutical LLC",
      "Origin": "Port of Los Angeles Los Angeles, CA",
      "Destination": "10000 W O'Hare Ave, Chicago, IL 60666",
      "Mode": "Rail ",
      "Estimated Departure": "2/27/19",
      "Estimated Arrival": "3/25/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "40aaaad9-aaa4-4bf4-bd49-622ecbde2bec",
      "Client Name": "Microsoft",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Air ",
      "Estimated Departure": "2/8/19",
      "Estimated Arrival": "3/9/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "8374793c-ca76-41db-bf17-ab1d689d809c",
      "Client Name": "Microsoft",
      "Origin": "95700 Roissy-en-France, France",
      "Destination": "201 Edgewater St, Staten Island, NY 10305",
      "Mode": "Air ",
      "Estimated Departure": "2/26/19",
      "Estimated Arrival": "3/28/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "b1c64f27-ada8-4187-bb98-9f454c90eac4",
      "Client Name": "Microsoft",
      "Origin": "190 45 Stockholm-Arlanda, Sweden",
      "Destination": "Victoria Harbour 維多利亞港 Hong Kong",
      "Mode": "Sea ",
      "Estimated Departure": "1/26/19",
      "Estimated Arrival": "2/16/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "90b2a047-a7f3-4b03-8a97-ae22baa4a141",
      "Client Name": "Alarwi",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Mode": "Sea ",
      "Estimated Departure": "4/24/19",
      "Estimated Arrival": "5/16/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "18db48d1-c13e-44b3-a778-714c0b7e215f",
      "Client Name": "Alarwi",
      "Origin": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Destination": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Mode": "Sea ",
      "Estimated Departure": "1/12/19",
      "Estimated Arrival": "2/12/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "c89ba29b-a6fe-4c48-a15e-b048e60cba39",
      "Client Name": "Microsoft",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Rail ",
      "Estimated Departure": "3/30/19",
      "Estimated Arrival": "4/30/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "fba22064-0dea-4154-b664-cbf6f5585f7e",
      "Client Name": "REI Seattle Flagship Store",
      "Origin": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Destination": "190 45 Stockholm-Arlanda, Sweden",
      "Mode": "Rail ",
      "Estimated Departure": "4/24/19",
      "Estimated Arrival": "5/20/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "94a1ebe1-cdaf-4daa-87e4-4268a314e499",
      "Client Name": "REI Seattle Flagship Store",
      "Origin": "Victoria Harbour 維多利亞港 Hong Kong",
      "Destination": "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      "Mode": "Rail ",
      "Estimated Departure": "4/10/19",
      "Estimated Arrival": "5/1/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "f33ac566-b1a7-4376-b8e2-0c17ab4c08e2",
      "Client Name": "REI Seattle Flagship Store",
      "Origin": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Destination": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Mode": "Rail ",
      "Estimated Departure": "3/21/19",
      "Estimated Arrival": "4/12/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "c36dabe7-2154-47af-8509-8998fae7e916",
      "Client Name": "Microsoft",
      "Origin": "Victoria Harbour 維多利亞港 Hong Kong",
      "Destination": "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      "Mode": "Rail ",
      "Estimated Departure": "3/8/19",
      "Estimated Arrival": "4/6/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "f973d590-6058-4502-8091-7b7956d2f2b9",
      "Client Name": "Speedy Groceries",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "190 45 Stockholm-Arlanda, Sweden",
      "Mode": "Sea ",
      "Estimated Departure": "4/4/19",
      "Estimated Arrival": "4/25/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "c8e0226b-1f16-48f6-98c9-1950064927e9",
      "Client Name": "REI Seattle Flagship Store",
      "Origin": "7-4 Deptford Rd, Singapore 759657",
      "Destination": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Mode": "Rail ",
      "Estimated Departure": "4/18/19",
      "Estimated Arrival": "5/11/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "e4cd3935-7263-4e00-bf3d-aa1600aed229",
      "Client Name": "Microsoft",
      "Origin": "Victoria Harbour 維多利亞港 Hong Kong",
      "Destination": "190 45 Stockholm-Arlanda, Sweden",
      "Mode": "Sea ",
      "Estimated Departure": "1/28/19",
      "Estimated Arrival": "2/19/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "c858289b-1dc8-45b3-b037-f5bb9869cae8",
      "Client Name": "Alarwi",
      "Origin": "95700 Roissy-en-France, France",
      "Destination": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Mode": "Sea ",
      "Estimated Departure": "3/12/19",
      "Estimated Arrival": "4/5/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "b2ed5015-ab36-4451-b636-0032175ecb6e",
      "Client Name": "Avalyn Pharma",
      "Origin": "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      "Destination": "482 Pier T Ave, Long Beach, CA 90802",
      "Mode": "Rail ",
      "Estimated Departure": "1/19/19",
      "Estimated Arrival": "2/9/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "24005ed1-4f7d-4507-96b1-0f08b7898bbc",
      "Client Name": "Tesla",
      "Origin": "Victoria Harbour 維多利亞港 Hong Kong",
      "Destination": "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      "Mode": "Air ",
      "Estimated Departure": "3/21/19",
      "Estimated Arrival": "4/12/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "02cdd662-f431-40cc-b0c2-fc37f4eb7bd0",
      "Client Name": "Broko",
      "Origin": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Destination": "Port of Los Angeles Los Angeles, CA",
      "Mode": "Rail ",
      "Estimated Departure": "4/14/19",
      "Estimated Arrival": "5/14/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "ab4ac47f-2f5f-4e31-bda3-eda8464de292",
      "Client Name": "Tesla",
      "Origin": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Destination": "Port of Los Angeles Los Angeles, CA",
      "Mode": "Rail ",
      "Estimated Departure": "3/11/19",
      "Estimated Arrival": "4/9/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "100805a1-da91-4f90-9b59-42a85873cd65",
      "Client Name": "Tesla",
      "Origin": "7-4 Deptford Rd, Singapore 759657",
      "Destination": "95700 Roissy-en-France, France",
      "Mode": "Air ",
      "Estimated Departure": "3/30/19",
      "Estimated Arrival": "4/28/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "749d48ec-1b5e-4d7f-b30e-37df9747a20d",
      "Client Name": "The Pike Brewing Company",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Mode": "Air ",
      "Estimated Departure": "3/25/19",
      "Estimated Arrival": "4/21/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "996c3eb9-defe-4134-a177-6cfe9c747c13",
      "Client Name": "Alarwi",
      "Origin": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Destination": "Hugo Eckener Ring 60549 Frankfurt",
      "Mode": "Sea ",
      "Estimated Departure": "4/12/19",
      "Estimated Arrival": "5/8/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "65257e3d-64ca-4107-abff-5168eceb4f17",
      "Client Name": "Speedy Groceries",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      "Mode": "Rail ",
      "Estimated Departure": "1/19/19",
      "Estimated Arrival": "2/13/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "a51bb5b6-60a0-45da-96db-d123ebe43cd1",
      "Client Name": "Sapphire Running",
      "Origin": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Air ",
      "Estimated Departure": "2/21/19",
      "Estimated Arrival": "3/15/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "4d3bdfb8-284d-4f78-8d9e-5220c7033f62",
      "Client Name": "Speedy Groceries",
      "Origin": "Port of Los Angeles Los Angeles, CA",
      "Destination": "482 Pier T Ave, Long Beach, CA 90802",
      "Mode": "Air ",
      "Estimated Departure": "2/16/19",
      "Estimated Arrival": "3/12/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "4aff66d5-0a46-4d04-b3ef-e901848f1624",
      "Client Name": "Dendreon Pharmaceutical LLC",
      "Origin": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Destination": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Mode": "Air ",
      "Estimated Departure": "2/27/19",
      "Estimated Arrival": "3/30/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "ee2b7e8c-9313-45b8-b16d-8ab29ff9bf98",
      "Client Name": "Tesla",
      "Origin": "482 Pier T Ave, Long Beach, CA 90802",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Air ",
      "Estimated Departure": "3/28/19",
      "Estimated Arrival": "4/24/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "a427c559-4732-4877-90a8-e14774995af7",
      "Client Name": "Speedy Groceries",
      "Origin": "482 Pier T Ave, Long Beach, CA 90802",
      "Destination": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Mode": "Air ",
      "Estimated Departure": "2/19/19",
      "Estimated Arrival": "3/13/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "dd17312a-675a-40c5-9363-2a198cc1d450",
      "Client Name": "Broko",
      "Origin": "190 45 Stockholm-Arlanda, Sweden",
      "Destination": "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      "Mode": "Sea ",
      "Estimated Departure": "3/4/19",
      "Estimated Arrival": "3/26/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "e15bc5ea-8247-4c17-8315-ff0e50b786f1",
      "Client Name": "Tesla",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Mode": "Rail ",
      "Estimated Departure": "1/11/19",
      "Estimated Arrival": "2/4/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "6a58d75b-a3e8-456b-b719-78f4896069a2",
      "Client Name": "Broko",
      "Origin": "10000 W O'Hare Ave, Chicago, IL 60666",
      "Destination": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Mode": "Sea ",
      "Estimated Departure": "3/30/19",
      "Estimated Arrival": "5/1/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "35410f3b-bf7f-470d-aecf-c03c908588a1",
      "Client Name": "Broko",
      "Origin": "201 Edgewater St, Staten Island, NY 10305",
      "Destination": "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      "Mode": "Air ",
      "Estimated Departure": "1/23/19",
      "Estimated Arrival": "2/14/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "2001041f-2689-4f56-9175-de1a38d2bce2",
      "Client Name": "Sapphire Running",
      "Origin": "Victoria Harbour 維多利亞港 Hong Kong",
      "Destination": "Port of Los Angeles Los Angeles, CA",
      "Mode": "Sea ",
      "Estimated Departure": "3/24/19",
      "Estimated Arrival": "4/21/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "8147722e-738a-461c-b74e-7d01da95964e",
      "Client Name": "Alarwi",
      "Origin": "95700 Roissy-en-France, France",
      "Destination": "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      "Mode": "Sea ",
      "Estimated Departure": "3/27/19",
      "Estimated Arrival": "4/18/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "b604096f-0486-448a-a68e-36a8cc27a0cb",
      "Client Name": "Alarwi",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Mode": "Rail ",
      "Estimated Departure": "3/18/19",
      "Estimated Arrival": "4/12/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "5b6c35de-9257-4bc5-b0bc-1708360188d3",
      "Client Name": "Microsoft",
      "Origin": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Destination": "201 Edgewater St, Staten Island, NY 10305",
      "Mode": "Rail ",
      "Estimated Departure": "1/29/19",
      "Estimated Arrival": "2/28/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "9097d72c-4b18-4b56-a495-0afe9dcba9e5",
      "Client Name": "Tesla",
      "Origin": "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      "Destination": "190 45 Stockholm-Arlanda, Sweden",
      "Mode": "Sea ",
      "Estimated Departure": "4/20/19",
      "Estimated Arrival": "5/18/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "1ac1a805-41cb-46a5-96e4-819a147c4f60",
      "Client Name": "Alarwi",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Sea ",
      "Estimated Departure": "1/18/19",
      "Estimated Arrival": "2/9/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "b0cbf90d-8873-483b-935a-ad5097f23f7f",
      "Client Name": "Dendreon Pharmaceutical LLC",
      "Origin": "Victoria Harbour 維多利亞港 Hong Kong",
      "Destination": "95700 Roissy-en-France, France",
      "Mode": "Rail ",
      "Estimated Departure": "3/29/19",
      "Estimated Arrival": "4/28/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "116a0ad9-87f3-4f7b-b51e-507df83d25dd",
      "Client Name": "Broko",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "Victoria Harbour 維多利亞港 Hong Kong",
      "Mode": "Rail ",
      "Estimated Departure": "1/7/19",
      "Estimated Arrival": "2/5/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "df0b0ce5-8bf8-415c-ba40-1f6a7d04bbd6",
      "Client Name": "Speedy Groceries",
      "Origin": "Victoria Harbour 維多利亞港 Hong Kong",
      "Destination": "95700 Roissy-en-France, France",
      "Mode": "Sea ",
      "Estimated Departure": "3/1/19",
      "Estimated Arrival": "4/1/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "76f2fe67-9eea-45e9-b34e-e4a2ef32cce5",
      "Client Name": "Microsoft",
      "Origin": "95700 Roissy-en-France, France",
      "Destination": "201 Edgewater St, Staten Island, NY 10305",
      "Mode": "Sea ",
      "Estimated Departure": "2/1/19",
      "Estimated Arrival": "2/28/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "b3e6c18b-bc23-4174-aa02-22361b2444c5",
      "Client Name": "Microsoft",
      "Origin": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Destination": "Victoria Harbour 維多利亞港 Hong Kong",
      "Mode": "Rail ",
      "Estimated Departure": "4/25/19",
      "Estimated Arrival": "5/23/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "0a54979c-78a9-4c36-81c6-c4580568917c",
      "Client Name": "Tesla",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Mode": "Rail ",
      "Estimated Departure": "1/1/19",
      "Estimated Arrival": "1/22/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "85eeffee-85d9-4d5a-b6fa-ee9204df71af",
      "Client Name": "Sapphire Running",
      "Origin": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Destination": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Mode": "Rail ",
      "Estimated Departure": "1/2/19",
      "Estimated Arrival": "2/1/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "95b789af-9146-435d-b60a-c88fd3a530f4",
      "Client Name": "Alarwi",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "482 Pier T Ave, Long Beach, CA 90802",
      "Mode": "Rail ",
      "Estimated Departure": "1/20/19",
      "Estimated Arrival": "2/19/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "33f7028c-ad20-46ae-92e2-a2a9fea74cd2",
      "Client Name": "Sapphire Running",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      "Mode": "Sea ",
      "Estimated Departure": "1/6/19",
      "Estimated Arrival": "2/5/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "fdb88cb2-4f41-4fa6-8813-51589d58214a",
      "Client Name": "Alarwi",
      "Origin": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Destination": "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      "Mode": "Rail ",
      "Estimated Departure": "1/18/19",
      "Estimated Arrival": "2/18/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "64e7d2a2-b475-4d03-a8f2-22cd73e547f4",
      "Client Name": "Alarwi",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "Hugo Eckener Ring 60549 Frankfurt",
      "Mode": "Rail ",
      "Estimated Departure": "2/24/19",
      "Estimated Arrival": "3/22/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "274b2233-02f5-4c71-b6ff-1e40b38d270b",
      "Client Name": "Broko",
      "Origin": "190 45 Stockholm-Arlanda, Sweden",
      "Destination": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Mode": "Air ",
      "Estimated Departure": "4/2/19",
      "Estimated Arrival": "4/25/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "d2e113f3-28c0-43d4-bcb0-10c2452d1ba2",
      "Client Name": "Dendreon Pharmaceutical LLC",
      "Origin": "7-4 Deptford Rd, Singapore 759657",
      "Destination": "201 Edgewater St, Staten Island, NY 10305",
      "Mode": "Rail ",
      "Estimated Departure": "4/12/19",
      "Estimated Arrival": "5/12/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "7143e11d-5809-4415-948b-8b4a3e4595ec",
      "Client Name": "The Pike Brewing Company",
      "Origin": "Victoria Harbour 維多利亞港 Hong Kong",
      "Destination": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Mode": "Rail ",
      "Estimated Departure": "2/15/19",
      "Estimated Arrival": "3/17/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "8d768286-ce6c-4ae7-957e-ba5ecf1bb1d5",
      "Client Name": "REI Seattle Flagship Store",
      "Origin": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Destination": "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      "Mode": "Air ",
      "Estimated Departure": "3/29/19",
      "Estimated Arrival": "4/20/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "7480f9c2-3cb0-4719-a63a-ea4655c58c94",
      "Client Name": "Alarwi",
      "Origin": "201 Edgewater St, Staten Island, NY 10305",
      "Destination": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Mode": "Air ",
      "Estimated Departure": "1/13/19",
      "Estimated Arrival": "2/7/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "83c3d141-704a-4e96-a434-375c6bee8592",
      "Client Name": "Speedy Groceries",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Mode": "Rail ",
      "Estimated Departure": "1/30/19",
      "Estimated Arrival": "2/26/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "be8b2b5a-a6b0-4f1f-be29-52e41fc704d8",
      "Client Name": "Alarwi",
      "Origin": "1 Jones Rd, Kempton Park, Johannesburg, 1632, South Africa",
      "Destination": "10000 W O'Hare Ave, Chicago, IL 60666",
      "Mode": "Air ",
      "Estimated Departure": "3/19/19",
      "Estimated Arrival": "4/19/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "75c3e661-6466-44a2-ab09-d1dda1e4ecad",
      "Client Name": "Avalyn Pharma",
      "Origin": "Lufthavnsboulevarden 6, 2770 Kastrup, Denmark",
      "Destination": "10000 W O'Hare Ave, Chicago, IL 60666",
      "Mode": "Rail ",
      "Estimated Departure": "2/10/19",
      "Estimated Arrival": "3/6/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "cc18917d-bea7-4567-88da-532c8b46177c",
      "Client Name": "The Pike Brewing Company",
      "Origin": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Destination": "201 Edgewater St, Staten Island, NY 10305",
      "Mode": "Rail ",
      "Estimated Departure": "1/12/19",
      "Estimated Arrival": "2/2/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "64734e7c-2f10-4a25-ace8-2bdf2d7cca47",
      "Client Name": "Microsoft",
      "Origin": "95700 Roissy-en-France, France",
      "Destination": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Mode": "Rail ",
      "Estimated Departure": "3/2/19",
      "Estimated Arrival": "4/2/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "69b362b3-a907-4e55-a561-4810c9aa32d7",
      "Client Name": "Microsoft",
      "Origin": "Port of Los Angeles Los Angeles, CA",
      "Destination": "190 45 Stockholm-Arlanda, Sweden",
      "Mode": "Air ",
      "Estimated Departure": "4/19/19",
      "Estimated Arrival": "5/13/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "a9f06023-dfe0-4cf8-ac11-09d41b3035dd",
      "Client Name": "Broko",
      "Origin": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Air ",
      "Estimated Departure": "3/20/19",
      "Estimated Arrival": "4/12/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "e4649791-eb60-4a2d-926c-b7e77301cfc3",
      "Client Name": "Sapphire Running",
      "Origin": "201 Edgewater St, Staten Island, NY 10305",
      "Destination": "95700 Roissy-en-France, France",
      "Mode": "Air ",
      "Estimated Departure": "1/30/19",
      "Estimated Arrival": "2/26/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "9e37d9ec-88c5-4faa-8291-553d6efc72f6",
      "Client Name": "Alarwi",
      "Origin": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Destination": "190 45 Stockholm-Arlanda, Sweden",
      "Mode": "Sea ",
      "Estimated Departure": "3/26/19",
      "Estimated Arrival": "4/19/19",
      "Status": "Arrived"
    },
    {
      "Shipment ID": "ac4888ee-7e32-4beb-ae01-80ee16322165",
      "Client Name": "Sapphire Running",
      "Origin": "482 Pier T Ave, Long Beach, CA 90802",
      "Destination": "10000 W O'Hare Ave, Chicago, IL 60666",
      "Mode": "Rail ",
      "Estimated Departure": "1/22/19",
      "Estimated Arrival": "2/17/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "9ac88e9d-3f68-488b-ad97-e4595680a260",
      "Client Name": "Dendreon Pharmaceutical LLC",
      "Origin": "Port of Los Angeles Los Angeles, CA",
      "Destination": "6301 Silver Dart Dr, Mississauga, ON L5P 1B2, Canada",
      "Mode": "Rail ",
      "Estimated Departure": "1/22/19",
      "Estimated Arrival": "2/19/19",
      "Status": "Roll-Over"
    },
    {
      "Shipment ID": "438eefdf-95c2-47e6-b539-0ab2ba76aea6",
      "Client Name": "Microsoft",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "Hugo Eckener Ring 60549 Frankfurt",
      "Mode": "Rail ",
      "Estimated Departure": "1/7/19",
      "Estimated Arrival": "2/7/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "8493d235-4d7b-4f5c-9459-fa87398207ae",
      "Client Name": "Avalyn Pharma",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Rail ",
      "Estimated Departure": "4/9/19",
      "Estimated Arrival": "5/11/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "938ba7e8-5632-4c10-bd8a-563e6d1d937f",
      "Client Name": "Dendreon Pharmaceutical LLC",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "Victoria Harbour 維多利亞港 Hong Kong",
      "Mode": "Rail ",
      "Estimated Departure": "1/29/19",
      "Estimated Arrival": "2/26/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "d0e70f89-afc0-4889-a050-c8dca4b11cbc",
      "Client Name": "Alarwi",
      "Origin": "Edvard Munchs veg, 2061 Gardermoen, Norway",
      "Destination": "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      "Mode": "Rail ",
      "Estimated Departure": "1/11/19",
      "Estimated Arrival": "2/5/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "132bfb78-13d3-4854-af53-a3cf85bb8a7f",
      "Client Name": "Avalyn Pharma",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      "Mode": "Sea ",
      "Estimated Departure": "3/23/19",
      "Estimated Arrival": "4/24/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "1575c496-6a2d-41dc-996f-9c3bbcb88037",
      "Client Name": "Broko",
      "Origin": "10000 W O'Hare Ave, Chicago, IL 60666",
      "Destination": "7-4 Deptford Rd, Singapore 759657",
      "Mode": "Rail ",
      "Estimated Departure": "4/16/19",
      "Estimated Arrival": "5/7/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "8ec3ce24-67fc-4916-aa3d-adb9650cc769",
      "Client Name": "The Pike Brewing Company",
      "Origin": "482 Pier T Ave, Long Beach, CA 90802",
      "Destination": "Port of Los Angeles Los Angeles, CA",
      "Mode": "Air ",
      "Estimated Departure": "4/28/19",
      "Estimated Arrival": "5/19/19",
      "Status": "TransportError"
    },
    {
      "Shipment ID": "371cbd15-0d0d-49f8-863a-8333e94c2f35",
      "Client Name": "Broko",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "95700 Roissy-en-France, France",
      "Mode": "Rail ",
      "Estimated Departure": "4/13/19",
      "Estimated Arrival": "5/10/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "a0d5c2b2-74b8-4915-8488-45b64ad72144",
      "Client Name": "Broko",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Mode": "Rail ",
      "Estimated Departure": "2/24/19",
      "Estimated Arrival": "3/18/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "1e68ef95-a71b-419c-a201-1060ab0e6802",
      "Client Name": "REI Seattle Flagship Store",
      "Origin": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Destination": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Mode": "Air ",
      "Estimated Departure": "1/12/19",
      "Estimated Arrival": "2/6/19",
      "Status": "Cancelled"
    },
    {
      "Shipment ID": "8156b3ef-7bf3-48e1-9d02-7054de091358",
      "Client Name": "Sapphire Running",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Mode": "Air ",
      "Estimated Departure": "2/20/19",
      "Estimated Arrival": "3/24/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "3ce5d35a-a09a-4b7e-8dbf-2fdf20621c76",
      "Client Name": "Broko",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "Victoria Harbour 維多利亞港 Hong Kong",
      "Mode": "Rail ",
      "Estimated Departure": "3/25/19",
      "Estimated Arrival": "4/23/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "e6098094-a0e5-40b1-ac6b-3688e64a88ce",
      "Client Name": "Sapphire Running",
      "Origin": "482 Pier T Ave, Long Beach, CA 90802",
      "Destination": "Helsinki Airport, Lentäjäntie 3, 01530 Vantaa, FINLAND",
      "Mode": "Air ",
      "Estimated Departure": "4/9/19",
      "Estimated Arrival": "5/5/19",
      "Status": "In Transit"
    },
    {
      "Shipment ID": "b4cf758a-f696-4a13-a68d-065911f9933d",
      "Client Name": "Sapphire Running",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "Port of Los Angeles Los Angeles, CA",
      "Mode": "Air ",
      "Estimated Departure": "2/3/19",
      "Estimated Arrival": "3/3/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "d1ebd3e8-2b71-4604-bbb9-c9050ded8852",
      "Client Name": "REI Seattle Flagship Store",
      "Origin": "Hugo Eckener Ring 60549 Frankfurt",
      "Destination": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Mode": "Rail ",
      "Estimated Departure": "3/26/19",
      "Estimated Arrival": "4/21/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "65fb5e79-c9a4-43eb-86b1-0424f8088f52",
      "Client Name": "The Pike Brewing Company",
      "Origin": "Keflavíkurflugvöllur, 235 Keflavík, Iceland",
      "Destination": "482 Pier T Ave, Long Beach, CA 90802",
      "Mode": "Rail ",
      "Estimated Departure": "2/21/19",
      "Estimated Arrival": "3/15/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "a5482222-a598-4cd2-8a8d-c416f9702741",
      "Client Name": "The Pike Brewing Company",
      "Origin": "Av de la Hispanidad, s/n, 28042 Madrid, Spain",
      "Destination": "6000 N Terminal Pkwy, Atlanta, GA 30320",
      "Mode": "Sea ",
      "Estimated Departure": "4/15/19",
      "Estimated Arrival": "5/14/19",
      "Status": "Customs Hold"
    },
    {
      "Shipment ID": "c998e634-135e-4d2d-84f5-3ca89a9fcb66",
      "Client Name": "Microsoft",
      "Origin": "New Udaan Bhawan, New Delhi 110037, INDIA",
      "Destination": "Hugo Eckener Ring 60549 Frankfurt",
      "Mode": "Air ",
      "Estimated Departure": "3/5/19",
      "Estimated Arrival": "4/3/19",
      "Status": "Customs Hold"
    }
   ];