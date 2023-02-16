import car_image from "../../public/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";

export interface IAnnouncement {
  id: string;
  is_sale: boolean;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  is_car: boolean;
  is_published: boolean;
  image: string[];
  user: IUser;
}

interface IUser {
  id: string;
  name: string;
}

const listAnnouncements: IAnnouncement[] = [
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel",
    },
    image: [car_image, car_image, car_image],
  },
  {
    id: "3adw1ad35-1a3wd1a3aw5-3aw1d5awd351-3a2w1da31d5a5wd1",
    is_sale: true,
    title: "Product title stays here - max 1 line",
    year: "2019",
    mileage: "0 KM",
    price: "R$ 00.000,00",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    is_car: true,
    is_published: true,
    user: {
      id: "a13d51ad3a1d3a5d1a3d5a3d1a",
      name: "Samuel Leão",
    },
    image: [car_image, car_image, car_image],
  },
];

export default listAnnouncements;
