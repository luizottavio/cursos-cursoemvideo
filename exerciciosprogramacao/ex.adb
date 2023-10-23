-- Programa simples em Ada para somar dois números

with Ada.Text_IO;

procedure Soma_Dois_Numeros is
   -- Declaração de variáveis
   Numero1, Numero2, Soma : Integer;

begin
   -- Solicita ao usuário que insira o primeiro número
   Ada.Text_IO.Put("Digite o primeiro número: ");
   Ada.Text_IO.Get(Item => Numero1);

   -- Solicita ao usuário que insira o segundo número
   Ada.Text_IO.Put("Digite o segundo número: ");
   Ada.Text_IO.Get(Item => Numero2);

   -- Calcula a soma
   Soma := Numero1 + Numero2;

   -- Exibe o resultado
   Ada.Text_IO.Put("A soma de " & Integer'Image(Numero1) &
                  " e " & Integer'Image(Numero2) &
                  " é: " & Integer'Image(Soma));
end Soma_Dois_Numeros;
