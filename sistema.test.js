const sistema = require("./sistema.js");

//1//

describe("Verificador de Palíndromo", () => {
  test("Deve retornar true para uma string que é um palíndromo", () => {
    expect(sistema.ehPalindromo("Arara")).toBe(true);
    expect(sistema.ehPalindromo("level")).toBe(true);
    expect(sistema.ehPalindromo("sistema")).toBe(false);
  });
});

//2//

describe("Contador de Vogais", () => {
    test("Deve contar corretamente o número de vogais ", () => {
        expect(sistema.contarVogais("Escola")).toBe(3);
        expect(sistema.contarVogais("Programação")).toBe(5);
        expect(sistema.contarVogais("xyz")).toBe(0);
    });
});

//3//

describe("Calculadora de Fatorial", () => {
    test("Deve calcular corretamente o fatorial de um número", () => {
        expect(sistema.calcularFatorial(5)).toBe(120);
        expect(sistema.calcularFatorial(0)).toBe(1);
        expect(sistema.calcularFatorial(1)).toBe(1);
    });
});

//4//

describe("Remoção de Duplicatas", () => {
    test("Deve remover corretamente os elementos duplicados de um array", () => {
        expect(sistema.removerDuplicatas([1, 2, 3, 3])).toEqual([1, 2, 3]);
        expect(sistema.removerDuplicatas(["a", "b", "a"])).toEqual(["a", "b"]);
    });     
});

//5//

describe("Validador de Agendamento", () => {
    test("Deve agendar corretamente uma consulta em um dia útil", () => {
        expect(sistema.agendarConsulta(new Date("2026-10-16"))).toBe("Consulta agendada com sucesso");
    });
    test("Deve lançar erro ao tentar agendar uma consulta em um final de semana", () => {
        expect(() => sistema.agendarConsulta(new Date("2026-10-18"))).toThrow("Clínica fechada aos finais de semana");
    });
});

//6//

describe("Formatador de Moeda", () => {
    test("Deve formatar corretamente um valor numérico em moeda brasileira", () => {
        expect(sistema.formatarMoeda(15.5)).toBe("R$ 15,50");
        expect(sistema.formatarMoeda(0)).toBe("R$ 0,00");
    });
    test("Deve lançar erro ao tentar formatar um valor inválido", () => {
        expect(() => sistema.formatarMoeda("abc")).toThrow("Valor inválido");
    });
});

//7//

describe("Validador de CPF Básico", () => {
    test("Deve validar corretamente um CPF válido", () => {
        expect(sistema.validarCpfBasico('11111111111')).toBe(false);
        expect(sistema.validarCpfBasico('123.456.789-09')).toBe(true);
    });
    test("Deve retornar false para um CPF inválido", () => {
        expect(sistema.validarCpfBasico('1234567890')).toBe(false);
        expect(sistema.validarCpfBasico('11111111111')).toBe(false);
    });
});

//8//

describe("Cálculo de Ingresso", () => {
    test("Deve calcular corretamente o valor do ingresso com desconto", () => {
        expect(sistema.calcularIngresso(65, true, 3)).toBe(20);
        expect(sistema.calcularIngresso(65, false, 3)).toBe(20);
        expect(sistema.calcularIngresso(65,false, 0)).toBe(20); 
        expect(sistema.calcularIngresso(25,true, 0)).toBe(20); 
        expect(sistema.calcularIngresso(25,false, 3)).toBe(20); 
        expect(sistema.calcularIngresso(25,false, 0)).toBe(40); 
    });
});

//9//

describe("Conta Bancaria", () => {

    let conta;

    beforeEach(() => {
        conta = new sistema.ContaBancaria("Cauã");
    });

    test("Validar Saldo Inicial", () => {
        expect(conta.obterSaldo()).toBe(0);
        expect(() => conta.sacar(1000)).toThrow("Saldo insuficiente");

        conta.depositar(1000);
        conta.sacar(250);
        expect(conta.obterSaldo()).toBe(750);
    });
});

//10//

describe('Consultar clima', () => {
  test('deve retornar a temperatura da cidade', async () => {
    const apiFalsa = {
      buscar: async () => ({ temperatura: 28 }),
    };


    await expect(
      sistema.obterClima('São Paulo', apiFalsa)
    ).resolves.toBe('A temperatura em São Paulo é de 28°C');
  });
});
