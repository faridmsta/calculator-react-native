import colors from "@/constants/Colors";
import { useEffect, useState } from "react";
import { Image, ImageBackground, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';




export default function Index() {


  

  const [answerShow, setAnswerShow] = useState(false)
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [history,setHistory] = useState([])
  

  const showResult = () => {
    setAnswerShow(true);


  }


  const handlePress = (inp) => {
    setAnswerShow(false);
    const lastChar = input.slice(-1);
    const operators = '%/*+-x';

    if (operators.includes(lastChar) && operators.includes(inp)) {
      setInput(input.slice(0, -1))

    }

    if ('%/*+-x'.includes(inp) && !input){
      setInput((prevInput) => 0 + inp);

    }else setInput((prevInput) => prevInput + inp);
  };

  

  const calculateResult = () => {
    try {
      if (!('%/*+-x'.includes(input.slice(-1)))) {

        const evalResult = eval(input.replace(/x/g, "*"));
        
        const fixedResult = () => {
          return new Intl.NumberFormat('en-US', {
            maximumSignificantDigits: 15,
          }).format(evalResult);
        }

        setResult(fixedResult());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");

  };

  useEffect(() => {
    if (input) {
      calculateResult();
    }
  }, [input]);



  const btns = [
    [
      {
        label: "C", color: "tomato",
        style: {

        },
        onPress: () => {
          clearInput()

        }
      },
      {
        label: "(", color: colors.numColor2,
        style: {
          flex:0.5,
          aspectRatio:1/2
        },
        onPress: () => {
          handlePress('(')
        }
      },
      {
        label: ")", color: colors.numColor2,
        style: {
          flex:0.5,
          aspectRatio:1/2
        },
        onPress: () => {
          handlePress(')')
        }
      },
      {
        label: "%", color: colors.numColor2,
        style: {

        },
        onPress: () => {
          handlePress('%')
        }
      },
      {
        label: "/", color: colors.numColor2,
        style: {

        },
        onPress: () => {
          handlePress('/')
        }
      },
    ],
    [
      {
        label: "7", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(7)
          calculateResult()
        }
      },
      {
        label: "8", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(8)
          calculateResult()
        }
      },
      {
        label: "9", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(9)
          calculateResult()
        }
      },
      {
        label: "X", color: colors.numColor2,
        style: {

        },
        onPress: () => {
          handlePress('x')
        }
      },
    ],
    [
      {
        label: "4", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(4)
          calculateResult()
        }
      },
      {
        label: "5", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(5)
          calculateResult()
        }
      },
      {
        label: "6", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(6)
          calculateResult()
        }
      },
      {
        label: "+", color: colors.numColor2,
        style: {

        },
        onPress: () => {
          handlePress('+')
        }
      },
    ],
    [
      {
        label: "1", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(1)
          calculateResult()

        }
      },
      {
        label: "2", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(2)
          calculateResult()
        }
      },
      {
        label: "3", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(3)
          calculateResult()
        }
      },
      {
        label: "-", color: colors.numColor2,
        style: {

        },
        onPress: () => {
          handlePress('-')
        }
      },
    ],
    [
      {
        label: ".", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress('.')
        }
      },
      {
        label: "0", color: colors.numColor,
        style: {

        },
        onPress: () => {
          handlePress(0)
          calculateResult()
        }
      },


    ],
  ]

  return (
    <SafeAreaView style={{ flex: 1 }}  >
      <StatusBar backgroundColor={colors.dsColor}  barStyle={'light-content'} />
      <View testID="calcDisp"
        style={{
          backgroundColor: colors.dsColor,
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 10

        }}
      >
        <Text
          style={{
            color: answerShow ? '#a3a3a3' : 'white',
            textAlign: 'right',
            fontSize: answerShow ? 24 : 42,
          

          }}
        >{input}</Text>
        <Text
          style={{
            color: answerShow ? 'white' : '#a3a3a3',
            textAlign: 'right',
            fontSize: answerShow ? 42 : 24
          }}
        >{result}</Text>
      </View>
      <Image source={require('./../assets/img/linegradeint.jpg')}
        style={{
          height:3,
          width: '100%',
        }}
      />
      <View testID="buttons"
        style={{
          flex: 1.5,
          backgroundColor: colors.brdColor,
          padding: 10
        }}
      >
        <View testID="row"
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {btns[0].map((item, index) => (
            <Button
              key={index}
              label={item.label}
              color={item.color}
              onPress={item.onPress}
              style={item.style}
            />
          ))}

        </View>
        <View testID="row"
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {btns[1].map((item, index) => (
            <Button
              key={index}
              label={item.label}
              color={item.color}
              onPress={item.onPress}
              style={item.style}
            />
          ))}

        </View>
        <View testID="row"
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {btns[2].map((item, index) => (
            <Button
              key={index}
              label={item.label}
              color={item.color}
              onPress={item.onPress}
              style={item.style}
            />
          ))}

        </View>
        <View testID="row"
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {btns[3].map((item, index) => (
            <Button
              key={index}
              label={item.label}
              color={item.color}
              onPress={item.onPress}
              style={item.style}
            />
          ))}

        </View>
        <View testID="row"
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {btns[4].map((item, index) => (
            <Button
              key={index}
              label={item.label}
              color={item.color}
              onPress={item.onPress}
              style={item.style}

            />
          ))}


          <Pressable
            style={({ pressed }) => [
              {
                flex: 1,
                aspectRatio: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              },
              { backgroundColor: pressed ? colors.dsColor : "transparent" },

            ]}
            onPress={() => {
              setInput((prevInput) => prevInput.slice(0, -1));
              calculateResult();
            }}
          >
            <Text style={[
              {
                textAlign: 'center',
                fontSize: 30,
                color: colors.numColor
              },]}>{<Ionicons name="backspace-outline" size={30} color={colors.numColor} />}</Text>
          </Pressable >
          <Pressable
            style={({ pressed }) => [
              {
                flex: 1,
                aspectRatio: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              },
              { backgroundColor: pressed ? colors.dsColor : "transparent" },

            ]}
            onPress={() => {
              showResult()
            }}
          >
            <Text style={[
              {
                textAlign: 'center',
                fontSize: 30,
                color: colors.numColor
              },]}>{'='}</Text>
          </Pressable >

        </View>
      </View>

    </SafeAreaView>
  );
}

const Button = ({ label, onPress, color, style, textStyle }) => {

  return (
    <Pressable
      style={({ pressed }) => [
        {
          flex: 1,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        },
        { backgroundColor: pressed ? colors.dsColor : "transparent" },
        style
      ]}
      onPress={onPress}
    >
      <Text style={[
        {
          textAlign: 'center',
          fontSize: 30,
          color
        }, textStyle]}>{label}</Text>
    </Pressable >

  );
};