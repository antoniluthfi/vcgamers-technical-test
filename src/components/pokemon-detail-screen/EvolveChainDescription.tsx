import React, {FC, useEffect, useState} from 'react';
import useFetchEvolveChain from './hooks/useFetchEvolveChain';
import {Row, Rows, Table} from 'react-native-table-component';
import {StyleSheet, Text, View} from 'react-native';
import {themeSelector} from 'services/global-state/theme';
import {useRecoilValue} from 'recoil';
import {useTranslation} from 'react-i18next';

type EvolveChainDescriptionProps = {
  urlSpecies: string;
};

const EvolveChainDescription: FC<EvolveChainDescriptionProps> = ({
  urlSpecies,
}) => {
  const theme = useRecoilValue(themeSelector);
  const {data, loading} = useFetchEvolveChain(urlSpecies);
  const {t} = useTranslation();

  const tableHead = ['No', t('name'), t('min_level'), t('baby')];
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!!data?.id && !loading) {
      const result = [];
      let index = 0;
      function getAllEvolutions(data: EvolutionChain['chain']) {
        if (data?.is_baby !== undefined) {
          index++;
          result.push([
            index,
            data.species.name,
            (data.evolution_details?.[0] as any)?.min_level || '-',
            data.is_baby ? t('yes') : t('no'),
          ]);
        }

        if (data?.evolves_to?.length) {
          data.evolves_to.forEach(evolution => {
            getAllEvolutions(evolution as any);
          });
        }
      }

      getAllEvolutions(data?.chain);

      if (result.length) {
        setTableData(result);
      }
    }
  }, [data?.id, loading]);

  return (
    <View style={{marginTop: 10}}>
      <Text style={[styles.title, {color: theme.text}]}>
        {t('evolution_chain')}
      </Text>

      <Table borderStyle={{borderWidth: 2, borderColor: theme.tableBorder}}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={{textAlign: 'center'}}
          flexArr={[1, 3, 2, 2]}
        />
        <Rows
          data={tableData}
          textStyle={[styles.tableData, {color: theme.text}]}
          flexArr={[1, 3, 2, 2]}
          heightArr={Array.from({length: tableData.length}, () => 50)}
        />
      </Table>
    </View>
  );
};

export default EvolveChainDescription;

const styles = StyleSheet.create({
  head: {height: 40, backgroundColor: '#f1f8ff'},
  tableData: {marginVertical: 5, marginLeft: 5, textAlign: 'center'},
  title: {fontWeight: 'bold', marginBottom: 5},
});
