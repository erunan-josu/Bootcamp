export const statComponent = (stat) => {
  return `
    <li class='stat' id='stat'>${stat.name}: ${stat.base_stat}</li>
    `
}
