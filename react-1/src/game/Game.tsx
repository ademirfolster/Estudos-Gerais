import { useState, useRef } from "react";
import champions from "../data/league.json";
import { Form, Input, Button, Typography, Card, Space } from "antd";

const { Title, Text } = Typography;

type Game = {
  ano_lancamento: number;
  classe: string;
  dano: string;
  dica: string;
  dificuldade: number;
  funcao: string;
  id: number;
  img: string;
  nome: string;
  recurso: string;
  tags: string;
};

const random = (arr: Game[]): Game =>
  arr[Math.floor(Math.random() * arr.length)];

export default function Game({ jogar }: { jogar: (v: boolean) => void }) {
  const [form] = Form.useForm();

  const initialTentativas = 5;

  const [data, setData] = useState<Game>(random(champions));
  const [tentativas, setTentativas] = useState(initialTentativas);
  const [disabled, setDisabled] = useState(false);
  const [win, setWin] = useState<boolean | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetGame = () => {
    setTentativas(initialTentativas);
    setData(random(champions));
    setDisabled(false);
    setWin(null);
    form.resetFields();
  };

  const nextRoundWithDelay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      resetGame();
    }, 2000);
  };

  const onFinish = (values: { user: string }) => {
    const resposta = values.user.trim().toLowerCase();

    if (resposta === data.nome.toLowerCase()) {
      setWin(true);
      setDisabled(true);
      nextRoundWithDelay();
    } else {
      const novaTentativa = tentativas - 1;
      setTentativas(novaTentativa);

      if (novaTentativa <= 0) {
        setWin(false);
        setDisabled(true);
        nextRoundWithDelay();
      } else {
        setWin(false);
      }
    }

    form.resetFields();
  };

  return (
    <div className="flex justify-center mt-10 w-full max-w-md mx-auto px-4">
      <Form
        form={form}
        onFinish={onFinish}
        className="w-full"
        layout="vertical"
      >
        <Card className="rounded-2xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <Space direction="vertical" size="large" className="w-full">
            <Title
              level={3}
              className="text-center mb-0! text-slate-800! italic font-black uppercase tracking-tight"
            >
              Adivinhe o Campeão
            </Title>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-inner">
              <div className="mb-2">
                <Text
                  strong
                  className="text-blue-600 uppercase text-[10px] tracking-widest block"
                >
                  Pista
                </Text>
                <Text className="text-slate-700 leading-relaxed italic">
                  "{data.dica}"
                </Text>
              </div>
              <div className="pt-2 border-t border-slate-200/60">
                <Text strong className="text-slate-500 text-xs">
                  Tentativas restantes:
                  <span
                    className={`ml-2 text-sm ${tentativas <= 2 ? "text-red-500 animate-pulse" : "text-slate-800"}`}
                  >
                    {tentativas}
                  </span>
                </Text>
              </div>
            </div>

            <Form.Item
              label={
                <span className="text-slate-400 uppercase text-[10px] font-bold tracking-widest">
                  Sua resposta
                </span>
              }
              name="user"
              rules={[{ required: true, message: "Digite uma resposta!" }]}
              className="mb-2"
            >
              <Input
                placeholder="Ex: Ahri..."
                size="large"
                autoFocus
                disabled={disabled}
                className="rounded-lg border-slate-200 hover:border-blue-400 focus:border-blue-500 h-12"
              />
            </Form.Item>

            <div className="space-y-3">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                disabled={disabled}
                className="h-12 rounded-lg font-bold uppercase tracking-wider shadow-md hover:shadow-blue-200 transition-all border-0 bg-blue-600"
              >
                Enviar Resposta
              </Button>

              <div className="min-h-[30px] flex items-center justify-center">
                {win === true && (
                  <Text
                    type="success"
                    className="font-bold animate-bounce text-base"
                  >
                    ✨ Parabéns, Você Acertou! ✨
                  </Text>
                )}

                {win === false && tentativas > 0 && (
                  <Text type="warning" className="font-medium">
                    ❌ Errou, tente de novo!
                  </Text>
                )}

                {win === false && tentativas === 0 && (
                  <Text type="danger" className="font-bold text-center">
                    GAME OVER! O campeão era: <br />
                    <span className="text-lg uppercase underline">
                      {data.nome}
                    </span>
                  </Text>
                )}
              </div>
            </div>
          </Space>
          <Button
            type="dashed"
            block
            onClick={() => jogar(false)}
            className=" text-slate-400 hover:text-slate-600 font-medium"
          >
            Voltar ao Menu Principal
          </Button>
        </Card>
      </Form>
    </div>
  );
}
