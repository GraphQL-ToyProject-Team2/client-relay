import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadQuery, PreloadedQuery } from 'react-relay';
import environment from '../relay/environment';
import getDetail from '../relay/queries/getDetail';
import Detail from '../pages/Detail';
import type { getDetailQuery } from '../relay/queries/__generated__/getDetailQuery.graphql';

const DetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const [queryRef, setQueryRef] = useState<PreloadedQuery<getDetailQuery> | null>(null);

  useEffect(() => {
    if (id) {
      const initialQueryRefDetail = loadQuery<getDetailQuery>(environment, getDetail, { id });
      setQueryRef(initialQueryRefDetail);
    }
  }, [id]);

  if (!id) {
    return <div>Error: ID is missing</div>;
  }

  if (!queryRef) {
    return <div>Loading...</div>;
  }

  return <Detail queryRef={queryRef} />;
};

export default DetailWrapper;
