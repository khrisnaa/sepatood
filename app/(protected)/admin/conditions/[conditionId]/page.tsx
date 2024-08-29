import { ConditionForm } from '../_components/category-form';
import { getCondition } from '@/actions/conditions';

const Page = async ({ params }: { params: { conditionId: string } }) => {
  const data = await getCondition(params.conditionId);
  return <ConditionForm initialData={data} />;
};
export default Page;
