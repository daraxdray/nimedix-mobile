import { Text, View } from 'react-native'
import React, { Component } from 'react'



export type SlideViewType = {
    title: string,
    description: string,
    image:string
}
export const NimSlideView = ({title = '', description= '',image="" } : SlideViewType )=>{

      return( <View>
        <Text style={{color:'black'}}>slideview</Text>
      </View>)
}

