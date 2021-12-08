import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import JumpTable from './components/JumpTable';

const { Cell } = ResponsiveGrid;

const FusionJumpTable = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="详情表格"
          breadcrumbs={[
            { name: '列表页面' },
            { name: '详情表格' },
          ]}
          description="详情表格的描述"
        />
      </Cell>

      <Cell colSpan={12}>
        <JumpTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FusionJumpTable;
