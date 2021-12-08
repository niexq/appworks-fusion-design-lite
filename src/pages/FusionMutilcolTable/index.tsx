import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import MultiColFilterTable from './components/MultiColFilterTable';

const { Cell } = ResponsiveGrid;

const FusionMutilcolTable = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="过滤表格"
          breadcrumbs={[
            { name: '列表页面' },
            { name: '多列过滤' },
          ]}
          description="多列过滤表格描述"
        />
      </Cell>

      <Cell colSpan={12}>
        <MultiColFilterTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FusionMutilcolTable;
