import Head from "next/head";
import { Main, Paragraph, Table, Title } from "../../components/layout";
import Math from "../../components/Math";
import { Watermark } from "../../components/Watermark";

export default function LogicEquation() {
  return (
    <>
      <Head>
        <title>Логика</title>
        <link rel="icon" href="/ax.svg" />
      </Head>

      <Main>
        <Title>Как решать логические уравнения?</Title>

        <Paragraph />

        <Paragraph>
          Для успешного выполнения этого задания желательно разобраться в
          законах алгебры логики:
        </Paragraph>

        <Paragraph>
          <Table>
            <tr>
              <td>
                <Math expression={"A \\land \\lnot A = 0"} />
              </td>
              <td>
                <Math expression={"A \\lor \\lnot A = 1"} />
              </td>
              <td>
                <Math expression={"A \\land 0 = 0"} />
              </td>
              <td>
                <Math expression={"A \\land 1 = A"} />
              </td>
            </tr>
            <tr>
              <td>
                <Math expression={"A \\lor 0 = A"} />
              </td>
              <td>
                <Math expression={"A \\lor 1 = 1"} />
              </td>
              <td>
                <Math expression={"A \\land A = A"} />
              </td>
              <td>
                <Math expression={"A \\lor A = A"} />
              </td>
            </tr>
            <tr>
              <td>
                <Math expression={"A \\land (A \\lor B) = A"} />
              </td>
              <td>
                <Math expression={"A \\lor A \\land B = A"} />
              </td>
              <td>
                <Math expression={"A \\land B = B \\land A"} />
              </td>
              <td>
                <Math expression={"A \\lor B = B \\lor A"} />
              </td>
            </tr>
            <tr>
              <td>
                <Math
                  expression={"A \\land (B \\land C) = (A \\land B) \\land C"}
                />
              </td>
              <td>
                <Math
                  expression={"A \\lor (B \\lor C) = (A \\lor B) \\lor C"}
                />
              </td>
              <td>
                <Math
                  expression={
                    "A \\lor B \\land C = (A \\lor B) \\land (A \\lor C)"
                  }
                />
              </td>
              <td>
                <Math
                  expression={
                    "A \\land (B \\lor C) = A \\land B \\lor A \\land C"
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Math
                  expression={
                    "\\overline{A \\land B} = \\overline{A} \\lor \\overline{B}"
                  }
                />
              </td>
              <td>
                <Math
                  expression={
                    "\\overline{A \\lor B} = \\overline{A} \\land \\overline{B}"
                  }
                />
              </td>
            </tr>
          </Table>
        </Paragraph>

        <Paragraph>
          Решим вот эту задачу. Важно запомнить основные преобразования, дабы
          каждый раз не вычислять их заново. И главное, для решения задач на
          логические уровнения необходимо немного логики:
        </Paragraph>

        <Paragraph>
          <Math
            expression={
              "(\\lnot x \\land y \\land z) \\lor (\\lnot x \\land \\lnot y \\land z) \\lor (\\lnot x \\land \\lnot y \\land \\lnot z)"
            }
          />
        </Paragraph>

        <Paragraph>
          <Table>
            <tr>
              <th>?</th>
              <th>?</th>
              <th>?</th>
              <th>F</th>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </Table>
        </Paragraph>

        <Paragraph>
          Для начала внимательно смотрим на выражение. ... ... смотрим ... ... и
          еще немного ... ... ... . Методом пристольного взгляда, мы понимаем,
          что <Math expression={"\\lnot x"} /> есть в каждой скобке, и случай,
          когда <Math expression={"\\lnot x = 0"} />, нас вообще не устраивает,
          а значит <Math expression={"\\lnot x \\neq 0"} />, то есть{" "}
          <Math expression={"x = 0"} />. Как видите, мы уже посредством очень
          простых рассуждений определили одну переменную.
        </Paragraph>

        <Paragraph>
          <Table>
            <tr>
              <th>?</th>
              <th>X</th>
              <th>?</th>
              <th>F</th>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </Table>
        </Paragraph>

        <Paragraph>
          А теперь самое время вспомнить одно из логических преобразований, а
          именно <Math expression={"A \\land 1 = A"} />. Мы же уже поняли, что{" "}
          <Math expression={"\\lnot x = 1"} />, а значит, можем спокойно от него
          избавиться. Теперь наше выражение выглядит вот так:
        </Paragraph>

        <Paragraph>
          <Math
            expression={
              "(y \\land z) \\lor (\\lnot y \\land z) \\lor (\\lnot y \\land \\lnot z)"
            }
          />
        </Paragraph>

        <Paragraph>
          Теперь (все также, метод пристального взгляда) увидим, что у нас есть
          два больно похожих выражения <Math expression={"(y \\land z)"} /> и{" "}
          <Math expression={"(\\lnot y \\land \\lnot z)"} />, и они оба должны
          быть истинны, а для этого и <Math expression={"y"} /> и{" "}
          <Math expression={"x"} /> должны быть одинаковыми, то есть{" "}
          <Math expression={"x = y"} />. Вы скажете: "и зачем мы это делали,
          если нам это ничего не дало, ведь все еще не понятно, какая переменная
          какому столбику принадлижит?" Ошибаетесь, теперь мы можем забыть про
          первую и третью строчки в таблице, потому что они уже никак не влияют
          на результат. И наша таблица превращается в это:
        </Paragraph>
        
        <Paragraph>
          <Table>
          <tr>
              <th>?</th>
              <th>X</th>
              <th>?</th>
              <th>F</th>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </Table>
        </Paragraph>

        <Paragraph>
          А наше выражение превращается в это:
        </Paragraph>

        <Paragraph>
          <Math expression={"\\lnot y \\land z"}/>
        </Paragraph>

        <Paragraph>
          И теперь становиться очевидно, что таблица выглядит именно так:
        </Paragraph>

        <Paragraph>
          <Table>
          <tr>
              <th>Z</th>
              <th>X</th>
              <th>Y</th>
              <th>F</th>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </Table>
        </Paragraph>

        <Paragraph>
          Ответ: ZXY.
        </Paragraph>

      </Main>

      <Watermark/>
    </>
  );
}
