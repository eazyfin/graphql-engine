import React, { ReactText } from 'react';
import { FaProjectDiagram, FaFont } from 'react-icons/fa';

const RsLeafCell = ({ leafName }: { leafName: ReactText }) => (
  <>
    <FaFont className="fill-current text-sm text-muted mr-1 p-0" />
    <span className="mr-2">{leafName}</span>
  </>
);

// the desgin mockup was using FA v5, instead of fa-project-diagram, I've used  fa-code-fork from FA v4 for the time being
// this matches with the icon that we show on RS page
// this can be changed once after we upgrade Font Awesome to v5
const ToRsCell = ({
  rsName,
  leafs,
}: {
  rsName: ReactText;
  leafs: ReactText[];
}) => (
  <>
    <div className="flex items-center">
      <FaProjectDiagram className="fill-current text-sm text-muted mr-1 p-0" />
      {rsName}
      <span className="px-2">/</span>
      {leafs.map(i => (
        <RsLeafCell leafName={i} />
      ))}
    </div>
  </>
);

export default ToRsCell;
