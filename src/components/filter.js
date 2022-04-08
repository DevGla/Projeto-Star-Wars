const filter = (planets, order) => {
  const negative = -1;
  planets.sort((a, b) => {
    switch (order.sort) {
    case 'ASC':
      if (a[order.column] === 'unknown') return 1;
      if (Number(a[order.column]) < Number(b[order.column])) return negative;
      if (Number(a[order.column]) > Number(b[order.column])) return 1;
      return 0;
    case 'DESC':
      if (a[order.column] === 'unknown') return 1;
      if (b[order.column] === 'unknown') return negative;
      if (Number(b[order.column]) > Number(a[order.column])) return 1;
      if (Number(b[order.column]) < Number(a[order.column])) return negative;
      return 0;
    default:
      return 0;
    }
  });
};

export default filter;
