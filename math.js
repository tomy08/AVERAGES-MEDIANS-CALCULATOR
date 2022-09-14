class MathFunction {
  static isPair = (lista) => {
    return !(lista.length % 2);
  };

  static calculatorMedian = (listaDesordenada) => {
    const lista = MathFunction.tidyList(listaDesordenada);
    const listaisPair = MathFunction.isPair(lista);

    if (listaisPair) {
      const indexMedium1 = lista.length / 2 - 1;
      const indexMedium2 = lista.length / 2;
      const mediumlists = [];
      mediumlists.push(lista[indexMedium1]);
      mediumlists.push(lista[indexMedium2]);

      const medianPair = MathFunction.calculatorAverage(mediumlists);
      return medianPair;
    } else {
      const indexMedium = Math.floor(lista.length / 2);
      const medianImpar = lista[indexMedium];
      return medianImpar;
    }
  };

  static calculatorAverage = (lista) => {
    const plusList = lista.reduce((a, b) => a + b);

    const average = plusList / lista.length;
    return average;
  };

  static tidyList = (listaDisordenada) => {
    const list = listaDisordenada.sort((a, b) => a - b);
    return list;
  };
}
