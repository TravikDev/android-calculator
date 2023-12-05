// import { Avatar, Button, Divider, Icon, Pressable } from '@react-native-material/core'
import { ScrollView, Text, View, Image, Dimensions, Modal, TouchableWithoutFeedback, FlatList, TextInput, Alert, StyleSheet, Switch } from 'react-native'
// import { ButtonIconCircle } from '../../../atoms/Buttons/ButtonIconCircle'
import { useNavigation } from '@react-navigation/native'
// import { TouchableHighlight } from 'react-native-gesture-handler'
// import { NutritionLineChart } from '../../nutrition/charts/LineChart/LineChart'
import { useState } from 'react'
import { LineChart } from '@src/components/LineChart'
// import { Children } from 'react'

const scrHeight = Dimensions.get('screen').height

/* @ts-ignore */
export const ProfilesElementsCharts = ({
  nutritionId = 1,
  title = '',
  /* @ts-ignore */
  filtersCount = 2,
  /* @ts-ignore */
  data
}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [elementsModalVisible, setElementsModalVisible] = useState(false);

  const [switchOption, setSwitchOption] = useState(false)

  const [forDelete, setForDelete] = useState(false)

  const [option1, setOption1] = useState(false)
  const [option2, setOption2] = useState(false)
  const [option3, setOption3] = useState(false)
  const [option4, setOption4] = useState(false)

  const [selectedStage, setSelectedStage] = useState('')

  const [stagesArr, setStagesArr] = useState([...data?.labels])
  const [stagesIncludedArr, setStagesIncludedArr] = useState([...data.labelsIncluded])


  // console.log(stagesArr)
  // console.log('stages included: ', stagesIncludedArr)

  const handleIncludedStages = (stage: any, bool: boolean) => {


    // console.log('wat', stagesIncludedArr[0])
    setStagesIncludedArr((state: any) => state.map((val: any, idx: number) => {


      const includedCount = state.reduce((acc: number, val: boolean, idx: number) => acc += +(val === true), 0)

      if (idx === stage && includedCount > 2) val = !val
      if (idx === stage && includedCount === 2) {
        val = true

      }

      console.log('includedCount: ', includedCount)

      // if(includedCount < 3 && idx === stage) val = !val
      return val
    }))
    // console.log(stage, bool)
  }

  const [elementsArr, setElementsArr] = useState(data.datasets)

  const handleIncludedElements = (value: string, bool: boolean) => {

    setElementsArr((state: any) => {

      const elementsIncluded = state.reduce((acc: number, val: any, idx: number) => acc += +(val.include === true), 0)


      return (
        state.map((val: any, idx: any) => {
          if (val.name === value && elementsIncluded !== 1) {
            val.include = !val.include
          }
          if (val.name === value && elementsIncluded === 1) {
            val.include = true
          }
          // console.log('log: ', val)
          return val
        })
      )
    })

  }

  const { labels, datasets } = data

  const [labelsFiltered, setLabelsFiltered] = useState(labels)

  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{}}>

      <Modal
        animationType="fade"
        transparent={true}
        // hitSlop={{ left: 100, }}
        needsOffscreenAlphaCompositing


        visible={modalVisible}

        // presentationStyle='overFullScreen'
        onRequestClose={() => {
          Alert.alert('Модальное окно было закрыто.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width: '100%' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: 5, paddingBottom: 5 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                  <Text style={{ fontSize: 20, fontWeight: '400', color: '#111' }}>Включённые фазы</Text>
                  {/* <ButtonIconCircle func={() => setModalVisible(false)} iconTitle='close' color='#111' size={42} /> */}
                </View>
                {/* <Icon name="close" size={28} /> */}
              </View>
              {/* <Divider style={{ marginBottom: 10 }} /> */}

              <View style={{ gap: 10, maxHeight: 500 }}>

                <FlatList
                  data={data.labels}
                  ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
                  // ListFooterComponent={() => <View></View>}
                  renderItem={(stage) => {
                    // console.log('stage: ', stage)
                    return (
                      <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                        <View style={{ padding: 10, backgroundColor: '#eee', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.modalText}>{stage.item}</Text>
                          {/* {console.log('stage idx: ', stage.index)} */}
                          <Switch
                            value={stagesIncludedArr[stage.index]}
                            onValueChange={(bool) => handleIncludedStages(stage.index, bool)} />
                        </View>
                      </View>
                    )
                  }}
                // keyExtractor={item => item.}
                />
                {/* {stagesArr.map((val, i) => (
                    <View key={i} style={{ borderRadius: 10, overflow: 'hidden' }}>
                      <Pressable style={{ padding: 10, backgroundColor: '#eee', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }} onPress={(e) => { setSelectedStage(val); setModalVisible(false) }}>
                        <Text style={styles.modalText}>{val}</Text>
                        {forDelete && <Switch value={option1} onValueChange={() => setOption1(state => !state)} />}
                      </Pressable>
                    </View>
                  ))} */}

              </View>

            </View>

            {/* <Divider /> */}

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}> */}

            {/* <Button
                title={forDelete ? 'Готово' : 'Удаление'}
                tintColor='116611' color='#116611' variant='outlined' style={{ flex: 1 }} onPress={() => setForDelete(state => !state)} /> */}

            {/* <Button disabled={forDelete ? true : false} title='Сохранить' color='#116611' style={{ flex: 1 }} /> */}
            {/* <Pressable
                  style={[styles.button, styles.buttonClose, { flex: 1 }]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable> */}
            {/* </View> */}
          </View>
        </View>
      </Modal>


      <Modal
        animationType="fade"
        transparent={true}
        // hitSlop={{ left: 100, }}
        needsOffscreenAlphaCompositing


        visible={elementsModalVisible}

        // presentationStyle='overFullScreen'
        onRequestClose={() => {
          Alert.alert('Модальное окно было закрыто.');
          setElementsModalVisible(false);
        }}>
        <TouchableWithoutFeedback onPress={() => { setElementsModalVisible(false) }}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width: '100%' }}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: 5, paddingBottom: 5 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                  <Text style={{ fontSize: 20, fontWeight: '400', color: '#111' }}>Включённые элементы</Text>
                  {/* <ButtonIconCircle func={() => setElementsModalVisible(false)} iconTitle='close' color='#111' size={42} /> */}
                </View>
                {/* <Icon name="close" size={28} /> */}
              </View>
              {/* <Divider style={{ marginBottom: 10 }} /> */}

              <View style={{ gap: 10, maxHeight: 500 }}>

                <FlatList
                  data={elementsArr.map((el: any) => el.name)}
                  ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
                  // ListFooterComponent={() => <View></View>}
                  renderItem={(stage) => {
                    // console.log('stage:', stage)
                    return (
                      <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                        <View
                          style={{ padding: 10, backgroundColor: '#eee', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.modalText}>{stage.item}</Text>
                          <Switch
                            value={elementsArr[stage.index].include}
                            onValueChange={(bool) => { handleIncludedElements(stage.item, bool) }} />
                        </View>
                      </View>
                    )
                  }
                  }
                // keyExtractor={item => item.}
                />
                {/* {stagesArr.map((val, i) => (
                    <View key={i} style={{ borderRadius: 10, overflow: 'hidden' }}>
                      <Pressable style={{ padding: 10, backgroundColor: '#eee', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between' }} onPress={(e) => { setSelectedStage(val); setModalVisible(false) }}>
                        <Text style={styles.modalText}>{val}</Text>
                        {forDelete && <Switch value={option1} onValueChange={() => setOption1(state => !state)} />}
                      </Pressable>
                    </View>
                  ))} */}

              </View>

            </View>

            {/* <Divider /> */}

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}> */}

            {/* <Button
                title={forDelete ? 'Готово' : 'Удаление'}
                tintColor='116611' color='#116611' variant='outlined' style={{ flex: 1 }} onPress={() => setForDelete(state => !state)} /> */}

            {/* <Button disabled={forDelete ? true : false} title='Сохранить' color='#116611' style={{ flex: 1 }} /> */}
            {/* <Pressable
                  style={[styles.button, styles.buttonClose, { flex: 1 }]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable> */}
            {/* </View> */}
          </View>
        </View>
      </Modal>

      <View
        style={{ backgroundColor: '#fbfbfb', borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
      >

        <View style={{ paddingHorizontal: 15, paddingVertical: 10, gap: 10 }}>
          <View>
            <Text style={{ fontWeight: "400", fontSize: 18, color: "#111" }}>{title}</Text>

            {/* <Divider style={{ marginTop: 5, marginBottom: 10 }} /> */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', overflow: 'hidden' }}>
                {/* <Pressable style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexGrow: 1, paddingVertical: 5, width: '100%' }} onPress={() => setModalVisible(true)}> */}
                  <Text style={{ color: '#116611', fontSize: 14, fontWeight: '400' }}>Фазы</Text>
                {/* </Pressable> */}
              </View>
              {filtersCount === 2 && (<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', overflow: 'hidden' }}>
                {/* <Pressable style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexGrow: 1, paddingVertical: 5, width: '100%' }} onPress={() => setElementsModalVisible(true)}> */}
                  <Text style={{ color: '#116611', fontSize: 14, fontWeight: '400' }}>Элементы</Text>
                {/* </Pressable> */}
              </View>)}

            </View>
          </View>


          {/* <Divider /> */}
          {/* 
                    <View style={{ overflow: 'hidden', borderRadius: 5 }}>
                        <Image style={{ height: 150, width: "100%" }} source={require('../../../../assets/images/posts/post1.jpeg')} />
                    </View> */}

          {/* <Divider /> */}

          {/* <View style={{ gap: 10 }}> */}

          {/* <Divider /> */}

          <LineChart data={data} stagesIncluded={stagesIncludedArr} />
          {/* </View> */}

        </View>

        {/* <Divider style={{ marginBottom: 10 }} /> */}


      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 6,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    gap: 10,
    elevation: 4,
  },
  button: {
    borderRadius: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc'
    // elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#efefef',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 18,
    color: '#111',
    fontWeight: '400',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: 'center',
    paddingVertical: 2,
    color: '#111',
    fontSize: 18,
    fontWeight: '300'

  },
  overlay: {
    position: 'absolute',
    zIndex: 5,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
})