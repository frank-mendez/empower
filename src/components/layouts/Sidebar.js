import React, { useState } from 'react';
import { euiDragDropReorder } from '@elastic/eui';
import {
  EuiPageSideBar,
  EuiFlexGroup,
  EuiDragDropContext,
  EuiDraggable,
  EuiDroppable,
  EuiButton,
  EuiCallOut,
  EuiFlexItem
} from '@elastic/eui';

const Sidebar = () => {
  const [list, setList] = useState(['1', '2', '3']);
  const onDragEnd = ({ source, destination }) => {
    if (source && destination) {
      const items = euiDragDropReorder(list, source.index, destination.index);

      setList(items);
    }
  };

  return (
    <EuiPageSideBar>
      <EuiFlexGroup gutterSize='l'>
        <EuiFlexItem>
          <EuiDragDropContext onDragEnd={onDragEnd}>
            <EuiDroppable
              droppableId='DROPPABLE_AREA'
              spacing='m'
              withPanel
              grow={false}
            >
              <EuiDraggable
                spacing='m'
                key={1}
                index={1}
                draggableId={1}
                disableInteractiveElementBlocking
              >
                <EuiCallOut
                  title='Qualcom'
                  color='success'
                  iconType='user'
                ></EuiCallOut>
              </EuiDraggable>
              <EuiDraggable
                spacing='m'
                key={2}
                index={2}
                draggableId={2}
                disableInteractiveElementBlocking
              >
                <EuiCallOut
                  title='Gunther Ackner'
                  color='warning'
                  iconType='user'
                ></EuiCallOut>
              </EuiDraggable>
              <EuiDraggable
                spacing='m'
                key={3}
                index={3}
                draggableId={3}
                disableInteractiveElementBlocking
              >
                <EuiCallOut
                  title='Sourcing'
                  color='danger'
                  iconType='user'
                ></EuiCallOut>
              </EuiDraggable>
            </EuiDroppable>
          </EuiDragDropContext>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageSideBar>
  );
};

export default Sidebar;
