import {View, Text, ScrollView} from 'react-native'
import { Header } from '../components/Header'
import { HabitDay,DAY_SIZE } from '../components/HabitDay'
import { generateRangeDatesFromYearStart} from '../utils/generate-range-between-dates'
import { useNavigation } from '@react-navigation/native'


export function Home(){

  const weekDays = ['D', 'S', 'T','Q','Q','S','S']
  const datesFromYearStart = generateRangeDatesFromYearStart()
  const minimumSummaryDatesSizes = 18 * 5;
  const amountOfDaysToFill =  minimumSummaryDatesSizes - datesFromYearStart.length

  const {navigate} = useNavigation();
  return (
    <View className='flex-1 bg-standard px-8 pt-16'>
      <Header />

      <View className='flex-row mt-6 mb-2 w-full border'>  
        {
          weekDays.map((weekDay,index) => (
            <Text 
              key={`${weekDay}-${index}`} 
              className='text-zinc-400 text-xl font-bold text-center mx-1'
              style={{width: DAY_SIZE}}
            >
              {weekDay}

            </Text>
          ))
        }
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100}}
      >
        <View className='flex-row flex-wrap'>
          {
            datesFromYearStart.map(date =>(
              <HabitDay key={date.toISOString()} onPress={()=>navigate('habit', {date: date.toISOString()})}/>
            ))
          }

          {
            amountOfDaysToFill > 0 && 
            Array.from({length: amountOfDaysToFill}).map((_,index) =>(
              <View 
              key={index} 
                className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40 '
                style={{width: DAY_SIZE, height: DAY_SIZE}}

              />
            ))
          }
      
        </View>
      </ScrollView>
      
    </View>
  )
} 