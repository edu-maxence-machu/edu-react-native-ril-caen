import React from 'react';
import {View} from 'react-native';
import ScanButtonView from '../components/ScanButtonView'
import ProductsHistory from '../components/ProductsHistory'

export default function Home({products, handleScan}){
    return (
        <View style={{flex: 1}}>
            <ScanButtonView onScanPress={handleScan}/>
            <ProductsHistory products={products} />
        </View>
    )
}