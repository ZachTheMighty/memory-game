export default function getTitle(url) {
  const array = url.split("/").at(-1).split(".").at(0).split("_");
  array[0] = array[0][0].toUpperCase() + array[0].slice(1);
  array[1] = array[1][0].toUpperCase() + array[1].slice(1);
  return array.join(" ");
}
