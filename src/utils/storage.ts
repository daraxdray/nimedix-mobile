import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadObject = async (key: string) => {
  const itemKey = `@Nimedix:${key}`;
  try {
    const serializedObject = await AsyncStorage.getItem(itemKey);
    if (serializedObject === null) {
      return undefined;
    }
    return JSON.parse(serializedObject);
  } catch (err) {
    return undefined;
  }
};

export const saveObject = async (key: string, obj: {}) => {
  const itemKey = `@Nimedix:${key}`;
  const serializedObject = JSON.stringify(obj);
  await AsyncStorage.setItem(itemKey, serializedObject);
};

export const saveItem = async (key: string, item: string) => {
  const itemKey = `@Nimedix:${key}`;
  await AsyncStorage.setItem(itemKey, item);
};

export const getItem = async (key: string) => {
  const itemKey = `@Nimedix:${key}`;
  
  try {
    const item = await AsyncStorage.getItem(itemKey);
    return item;
    
  } catch (error) {
    console.log('....error.....: ',error);
    return ''
  }
};

export const remove = async (key: string) => {
  const itemKey = `@Nimedix:${key}`;
  await AsyncStorage.removeItem(itemKey);
};

export const clear = async () => {
  await AsyncStorage.clear();
};