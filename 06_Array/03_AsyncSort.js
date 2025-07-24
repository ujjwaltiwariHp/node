const files = ["file1", "file2", "file3"];

async function getModifiedTime(file) {
  await new Promise(res => setTimeout(res, 100)); // simulate delay
  return Math.random(); // random time for example
}

async function asyncSortExample() {
  const withSortKeys = await Promise.all(
    files.map(async (file) => ({
      file,
      sortKey: await getModifiedTime(file)
    }))
  );

  withSortKeys.sort((a, b) => a.sortKey - b.sortKey); // ascending
  const sortedFiles = withSortKeys.map(f => f.file);
  console.log("Sorted files:", sortedFiles);
}

asyncSortExample();
