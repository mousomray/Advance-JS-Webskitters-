const createIdentityMatrix = (n) => {
    const identityMatrix = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(i === j ? 1 : 0);
      }
      identityMatrix.push(row);
    }
    return identityMatrix;
  };
  
  // Example usage:
  const n = 4;
  const identityMatrix = createIdentityMatrix(n);
  console.log(identityMatrix);
  