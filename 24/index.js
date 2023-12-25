function getStaircasePaths(steps, maxJump) {
  const sequences = [];

  function findSequencesHelper(currentSequence, remainingSteps) {
    if (remainingSteps === 0) {
      sequences.push(currentSequence.slice());
      return;
    }

    for (let jump = 1; jump <= maxJump && jump <= remainingSteps; jump++) {
      currentSequence.push(jump);

      findSequencesHelper(currentSequence, remainingSteps - jump);

      currentSequence.pop();
    }
  }

  findSequencesHelper([], steps);

  return sequences;
}

getStaircasePaths(2, 1);
