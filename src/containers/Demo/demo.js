import React from 'react'
import { Helpers } from '../../theme'
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './demoStyle'
import NestedListView, { NestedRow } from 'react-native-nested-listview'

const data = [{ title: 'Node 1', items: [{ title: 'Node 1.1' }, { title: 'Node 1.2' }] }];

const Demo = () => (
  <SafeAreaView style={[Helpers.fillRowCenter]}>
    <NestedListView
      data={data}
      getChildrenName={(node) => 'items'}
      onNodePressed={(node) => console.log(node)}
      renderNode={(node, level) => (
        <NestedRow
          level={level}
          style={styles.row}
        >
          <Text>{node.title}</Text>
        </NestedRow>
      )}
    />
  </SafeAreaView>
)

export default Demo