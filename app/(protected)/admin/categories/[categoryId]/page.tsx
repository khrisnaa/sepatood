import { CategoryForm } from '../_components/category-form';
import { getBillboards } from '@/actions/billboards';
import { getCategory } from '@/actions/categories';

const Page = async ({ params }: { params: { categoryId: string } }) => {
  const data = await getCategory(params.categoryId);
  return <CategoryForm initialData={data} />;
};
export default Page;
