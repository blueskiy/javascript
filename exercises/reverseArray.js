// const array = ['a', 'b', 'c', 'd', 'e']
// const reverseArray = array.reverse()
// console.log(reverseArray);

function reverseArray(a) {
  let ponteiroMenor = 0;
  let ponteiroMaior = a.length - 1

  while (ponteiroMenor < ponteiroMaior) {
    //swap
    let temp = a[ponteiroMenor];
    a[ponteiroMenor] = a[ponteiroMaior];
    a[ponteiroMaior] = temp;

    ponteiroMenor++
    ponteiroMaior--
  }
  return a
}

const array = [1, 2, 3, 4, 5]
const result = reverseArray(array)
console.log(result);
