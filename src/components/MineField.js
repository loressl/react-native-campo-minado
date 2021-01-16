import React from 'react';
import { View, StyleSheet } from 'react-native'
import Field from './Field';

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field key={c} {...field}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={() => props.onSelectField(r, c)} />
        })
        return <View key={r} style={{ flexDirection: 'row' }}>{columns}</View>
    })

    return <View style={styles.container}>{rows}</View>

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})
