const AnaliseDeDados = require("../src/analiseDeDados");

describe("Classe AnaliseDeDados - Método adicionarDados", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados();

  });

  test("Adicionar novos dados válidos (Array)", async () => {
    const novosDados = [1,2,'w'];

    expect(analiseDeDados.adicionarDados(novosDados)).toStrictEqual([1,2,'w']);
  });
  
  test("Adicionar novos dados inválidos (Sem Array), deve lançar um erro avisando que os dados são inválidos", async () => {
    const novosDados = 1;
  
  });
});

describe("Classe AnaliseDeDados - Método limparDados", () => {
  let analiseDeDados;

  beforeEach(() => {
    analiseDeDados = new AnaliseDeDados(); 
    analiseDeDados.dados = [1,2,3,'re'];
  });

  test('Deve limpar todos os dados armazenados', async () => {
    expect(analiseDeDados.limparDados()).toStrictEqual([]);
  });

});

 describe("Classe AnaliseDeDados - Método ordenarDados", () => {
    let analiseDeDados;

    beforeEach(() => {
      analiseDeDados = new AnaliseDeDados(); 
      analiseDeDados.dados = [4,7,1,4,43,-2,4,0];
    });

  test("Ordenar os dados armazenados", async () => {
    expect(analiseDeDados.ordenarDados()).toStrictEqual([-2,0,1,4,4,4,7,43]);
  })

 })

describe("Classe AnaliseDeDados - Método calcularMedia", () => {
    let analiseDeDados;

    analiseDeDados = new AnaliseDeDados(); 

  test("Calcular a moda dos dados armazenados (sem dados no array)", async () => {
    analiseDeDados.dados = [];
    expect(analiseDeDados.calcularModa()).toStrictEqual(null);
  })

  test("Calcular a media dos dados armazenados (com dados no array)", async () => {
    analiseDeDados.dados = [10,5,15];
    expect(analiseDeDados.calcularMedia()).toBe(10);
  })
});
  
describe("Classe AnaliseDeDados - Método calcularModa", () => {
    let analiseDeDados;
    analiseDeDados = new AnaliseDeDados(); 
    
  test("Calcular a moda dos dados armazenados (sem dados no array)", async () => {
    analiseDeDados.dados = [];
    expect(analiseDeDados.calcularModa()).toStrictEqual(null);
  })

  test("Calcular a moda dos dados armazenados (com dados no array)", async () => {
    analiseDeDados.dados = [10,5,15];

    expect(analiseDeDados.calcularModa()).toStrictEqual([5,10,15]);
  })
});

describe("Classe AnaliseDeDados - Método calcularMediana", () => {
    let analiseDeDados;
    analiseDeDados = new AnaliseDeDados(); 
    
  test("Calcular a mediana dos dados armazenados (sem dados no array)", async () => {
    analiseDeDados.dados = [];
    expect(analiseDeDados.calcularMediana()).toStrictEqual(null);
  })

  test("Calcular a mediana dos dados armazenados (com dados no array)", async () => {
    analiseDeDados.dados = [10,6,16];

    expect(analiseDeDados.calcularMediana()).toStrictEqual(10);
  })
})

describe("Classe AnaliseDeDados - Método calcularVariancia", () => {
    let analiseDeDados;
    analiseDeDados = new AnaliseDeDados(); 
    
  test("Calcular a variancia dos dados armazenados (sem dados no array)", async () => {
    analiseDeDados.dados = [];
    expect(analiseDeDados.calcularVariancia()).toStrictEqual(null);
  })

  test("Calcular a variancia dos dados armazenados (com dados no array)", async () => {
    analiseDeDados.dados = [2,4,6];

    expect(analiseDeDados.calcularVariancia()).toBeGreaterThanOrEqual(2);
    expect(analiseDeDados.calcularVariancia()).toBeLessThan(3);
  })
});

describe("Classe AnaliseDeDados - Método calcularDesvioPadrao", () => {
    let analiseDeDados;
    analiseDeDados = new AnaliseDeDados(); 
    
  test("Calcular o Desvio Padrão dos dados armazenados (sem dados no array)", async () => {
    analiseDeDados.dados = [];
    expect(analiseDeDados.calcularDesvioPadrao()).toStrictEqual(null);
  })

  test("Calcular o Desvio Padrão dos dados armazenados (com dados no array)", async () => {
    analiseDeDados.dados = [2,4,6];

    expect(analiseDeDados.calcularDesvioPadrao()).toBeGreaterThanOrEqual(1.5);
    expect(analiseDeDados.calcularDesvioPadrao()).toBeLessThan(2);
  })
})

describe("Classe AnaliseDeDados - Método encontrarMinimo", () => {
    let analiseDeDados;

    beforeEach(() => {
      analiseDeDados = new AnaliseDeDados(); 
      analiseDeDados.dados = [4,7,1,4,43,-2,4,0];
    });

  test("Encontrar o valor minimo", async () => {
    expect(analiseDeDados.encontrarMinimo()).toStrictEqual(-2);
  })
})

describe("Classe AnaliseDeDados - Método encontrarMaximo", () => {
    let analiseDeDados;

    beforeEach(() => {
      analiseDeDados = new AnaliseDeDados(); 
      analiseDeDados.dados = [4,7,1,4,43,-2,4,0];
    });

  test("Encontrar o valor maxino", async () => {
    expect(analiseDeDados.encontrarMaximo()).toStrictEqual(43);
  })
})

describe("Classe AnaliseDeDados - Método normalizarDados", () => {
    let analiseDeDados;
    analiseDeDados = new AnaliseDeDados(); 
    
  test("Normalizar dados (Maior valor é igual ao menor)", async () => {
    analiseDeDados.dados = [1,1,1,1];
    expect(analiseDeDados.normalizarDados()).toStrictEqual([0,0,0,0]);
  })

  test("Normalizar dados (Maior valor é diferente do menor)", async () => {
    analiseDeDados.dados = [2,4,6];

    expect(analiseDeDados.normalizarDados()).toStrictEqual([0,0.5,1]);
  })
})

describe("Classe AnaliseDeDados - Método calcularPercentil", () => {
    let analiseDeDados;
    analiseDeDados = new AnaliseDeDados(); 
    
  test("Calcular Percentio (Array Vazio)", async () => {
    analiseDeDados.dados = [];
    expect(analiseDeDados.calcularPercentil(10)).toStrictEqual(null);
  })

  test("Calcular Percentio (Array com valores)", async () => {
    analiseDeDados.dados = [2,4,6,5,2];

    expect(analiseDeDados.calcularPercentil(10)).toStrictEqual(2);
  })

  test("Calcular Percentio (Percentil menor que 0)", async () => {
    analiseDeDados.dados = [2,4,6,5,2];

    expect(analiseDeDados.calcularPercentil(-1)).toStrictEqual(null);
  })

  test("Calcular Percentio (Percentil maior que 100)", async () => {
    analiseDeDados.dados = [2,4,6,5,2];

    expect(analiseDeDados.calcularPercentil(200)).toStrictEqual(null);
  })
})

describe("Classe AnaliseDeDados - Método calcularSoma", () => {
    let analiseDeDados;

    beforeEach(() => {
      analiseDeDados = new AnaliseDeDados(); 
      analiseDeDados.dados = [4,7,1,4,43,-2,4,0];
    });

  test("Fazer a soma dos dados", async () => {
    expect(analiseDeDados.calcularSoma()).toStrictEqual(61);
  })
})

describe("Classe AnaliseDeDados - Método calcularProduto", () => {
    let analiseDeDados;

    beforeEach(() => {
      analiseDeDados = new AnaliseDeDados(); 
      analiseDeDados.dados = [4,7,1,4,43,2,4,0];
    });

  test("Calcular o produto dos dados", async () => {
    expect(analiseDeDados.calcularProduto()).toStrictEqual(0);
  })
})

describe("Classe AnaliseDeDados - Método calcularAmplitude", () => {
    let analiseDeDados;

    beforeEach(() => {
      analiseDeDados = new AnaliseDeDados(); 
      analiseDeDados.dados = [4,7,1,4,43,2,4,0];
    });

  test("Calcular a amplitude dos dados", async () => {
    expect(analiseDeDados.calcularAmplitude()).toStrictEqual(43);
  })
})

describe("Classe AnaliseDeDados - Método calcularCoeficienteVariacao", () => {
    let analiseDeDados;

    beforeEach(() => {
      analiseDeDados = new AnaliseDeDados(); 
      analiseDeDados.dados = [2,4,6];
    });

  test("Calcular o coeficiente de variação dos dados", async () => {
    expect(analiseDeDados.calcularCoeficienteVariacao()).toBeGreaterThanOrEqual(40);
    expect(analiseDeDados.calcularCoeficienteVariacao()).toBeLessThan(41);
  })
})

describe("Classe AnaliseDeDados - Método removerOutliers", () => {
    let analiseDeDados;

    beforeEach(() => {
      analiseDeDados = new AnaliseDeDados(); 
      analiseDeDados.dados = [2,4,6];
    });

  test("Remover Outlier dos dados", async () => {
    expect(analiseDeDados.removerOutliers());
  })
})

describe("Classe AnaliseDeDados - Método calcularCorrelacao", () => {
    let analiseDeDados;
    analiseDeDados = new AnaliseDeDados(); 
    
  test("Calcular Correlação (Array Vazio)", async () => {
    analiseDeDados.dados = [];
    expect(analiseDeDados.calcularCorrelacao([1,4,5,6])).toStrictEqual(null);
  })

  test("Calcular Correlação (Array com tamanhos diferentes)", async () => {
    analiseDeDados.dados = [2,4,6,5,2];

    expect(analiseDeDados.calcularCorrelacao([1,4,5,6])).toStrictEqual(null);
  })

  test("Calcular Correlação ", async () => {
    analiseDeDados.dados = [1,2,3,4,5];

    expect(analiseDeDados.calcularCorrelacao([1,3,5,7,9])).toBeGreaterThan(0.9);
    expect(analiseDeDados.calcularCorrelacao([1,3,5,7,9])).toBeLessThanOrEqual(1);
  })
})