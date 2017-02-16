export interface IRecipe {
  id: number,
  name: string,
  type: string,
  description: string,
  longdescription: string,
  sizes: Array<string>,
  image: string,
  imagetwo: string,
  imagethree: string,
  imagefour: string,
  brand: string,
  stock: number,
  price: number,
  isfeatured: boolean,
  likes: number
}
