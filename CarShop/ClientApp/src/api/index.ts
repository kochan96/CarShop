import carThumbnail from "../golf.jpg";
import { v4 } from "uuid";

export type Vehicle = {
  description: string;
  owner: Owner;
  images: string[];
} & VehicleListItem;

export type Owner = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type VehicleListItem = {
  id: string;
  thumbnail: string;
  title: string;
  price: string;
  year: number;
  mileage: string;
  fuelType: string;
  vehicleType: string;
  model: string;
  brand: string;
  createdOn: Date;
};

export const authors: Owner = {
  firstName: "Jan",
  lastName: "Kowalski",
  phoneNumber: "Placeholder phone number",
  email: "placeholder email",
};

export const vehicles: Vehicle[] = Array.from(Array(10).keys()).map(() => {
  const description =
    // eslint-disable-next-line no-multi-str
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est justo, ornare non nunc nec, facilisis gravida ipsum. Cras maximus venenatis ante, in venenatis sem. Mauris accumsan rhoncus mi, non tincidunt nisl sollicitudin sit amet. Phasellus a lacus sed eros dapibus ullamcorper eu convallis tortor. Nulla massa eros, mollis quis tincidunt vel, tincidunt a tellus. Vivamus at sodales magna, elementum bibendum sem. Integer eu ipsum et eros molestie rutrum ut ut neque. Proin cursus quam vitae tellus luctus, a tincidunt ligula vulputate. Sed sodales, nisl eget finibus finibus, felis quam facilisis lorem, sed vestibulum mi nibh a dolor. Vestibulum finibus convallis congue. Suspendisse sed turpis nisi. Suspendisse mauris ligula, varius a est commodo, malesuada pretium justo.\
    Nunc a nulla vel magna gravida blandit. Fusce vel blandit sapien. In tincidunt nisi sed volutpat tincidunt. Maecenas convallis, odio nec condimentum posuere, quam risus scelerisque ipsum, tincidunt pulvinar lectus mi ac leo. Integer ex purus, aliquet nec ornare a, pharetra at metus. Maecenas aliquet nunc et nisl dictum, ut interdum mi volutpat. Etiam id aliquet mauris. Vestibulum ac neque sollicitudin, dictum dolor eget, dapibus quam. Suspendisse dapibus, libero et fermentum interdum, ligula ex ultrices libero, non iaculis nisi dui quis lacus.\
    Maecenas gravida, nulla sed mattis hendrerit, odio ligula sagittis enim, ut volutpat ante justo non ex. Quisque vel odio lacus. Aliquam sit amet rutrum nibh. Curabitur condimentum, metus ut molestie aliquet, magna ipsum ornare neque, nec sollicitudin augue elit vel nulla. Suspendisse lobortis erat nec vulputate aliquet. Fusce dictum lobortis nisi, rutrum aliquet metus eleifend ac. Vestibulum sodales diam non dictum porttitor. Fusce a dictum eros. Ut quis orci non neque mattis laoreet. Donec ut velit quis felis rhoncus accumsan. Fusce et dolor a quam imperdiet imperdiet vitae eu eros. Pellentesque quis hendrerit odio. Ut ut vulputate massa.\
    Aenean congue ante magna, ut scelerisque est dictum id. Pellentesque molestie nisi eget nulla dignissim imperdiet. Cras venenatis pretium lacus vel faucibus. Etiam a eros tristique, lobortis leo nec, condimentum ante. Aenean in elit congue, blandit mauris a, malesuada tortor. Proin at est a nisl commodo consectetur at id dui. Cras a luctus sapien.\
    Donec suscipit ante nec cursus sodales. Curabitur velit mauris, vulputate et sapien mollis, efficitur venenatis massa. Aliquam consectetur magna sed laoreet consectetur. Praesent eget ante tincidunt, mollis odio in, volutpat mauris. Quisque non bibendum risus. Vivamus placerat, nunc sit amet vestibulum finibus, lectus diam mattis ante, non gravida quam mi at libero. Phasellus quis nunc massa. Nunc eu bibendum justo. Nullam facilisis cursus tellus, vel vulputate dolor efficitur rutrum. Donec pretium tincidunt neque, eu sagittis magna cursus sed. Suspendisse potenti. Nulla eget ante luctus, commodo massa eget, efficitur massa.";
  return {
    id: v4(),
    model: "4",
    brand: "Golf",
    thumbnail: carThumbnail,
    title: "Car title",
    description: description,
    price: "12 000PLN",
    year: 2014,
    mileage: "100000 km",
    fuelType: "Benzyna",
    vehicleType: "Suv",
    createdOn: new Date(),
    owner: authors,
    images: [
      carThumbnail,
      carThumbnail,
      carThumbnail,
      carThumbnail,
      carThumbnail,
      carThumbnail,
      carThumbnail,
      carThumbnail,
    ],
  };
});
