import { useState, useRef } from 'react';
import champions from '../data/league.json';
import { Form, Input, Button, Typography, Card, Space } from 'antd';

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

export default function Game ({ jogar }: { jogar: (v: boolean) => void }) {
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
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ width: 400 }}
      >
        <Card style={{ borderRadius: 12 }}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Title level={3} style={{ textAlign: 'center' }}>
              Adivinhe o campeão
            </Title>

            <div>
              <Text strong>Dica:</Text> <Text>{data.dica}</Text>
              <br />
              <Text strong>Tentativas: {tentativas}</Text>
            </div>

            <Form.Item
              label="Sua resposta"
              name="user"
              rules={[{ required: true, message: 'Digite uma resposta!' }]}
            >
              <Input
                placeholder="Ex: Ahri..."
                size="large"
                autoFocus
                disabled={disabled}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                disabled={disabled}
              >
                Enviar
              </Button>

              {win === true && (
                <Text
                  type="success"
                  style={{ display: 'block', textAlign: 'center', marginTop: 10 }}
                >
                  Parabens, Você Acertou!
                </Text>
              )}

              {win === false && tentativas > 0 && (
                <Text
                  type="warning"
                  style={{ display: 'block', textAlign: 'center', marginTop: 10 }}
                >
                  Errou, tenta de novo
                </Text>
              )}

              {win === false && tentativas === 0 && (
                <Text
                  type="danger"
                  style={{ display: 'block', textAlign: 'center', marginTop: 10 }}
                >
                  Você perdeu! Era: {data.nome}
                </Text>
              )}
            </Form.Item>

            <Button type="default" block onClick={() => jogar(false)}>
              Voltar ao lobby
            </Button>
          </Space>
        </Card>
      </Form>
    </div>
  );
}