# 学习笔记

贪心掌握的不太好， 都是看了题解才能做出来。

## DFS 代码模板

### 递归写法

```python
visited = set()
def dfs(node, visited):
    if node in visited: # terminator
    	# already visited
    	return
	visited.add(node)
	# process current node here.
	...
	for next_node in node.children():
		if next_node not in visited:
			dfs(next_node, visited)
```

### 非递归写法

```python
def DFS(self, tree):
	if tree.root is None:
		return []
	visited, stack = [], [tree.root]
	while stack:
		node = stack.pop()
		visited.add(node)
		process (node)
		nodes = generate_related_nodes(node)
		stack.push(nodes)
	# other processing work
	...

```

## BFS 代码模板

```python
# Python
def BFS(graph, start, end):
    visited = set()
	queue = []
	queue.append([start])
	while queue:
		node = queue.pop()
		visited.add(node)
		process(node)
		nodes = generate_related_nodes(node)
		queue.push(nodes)
	# other processing work
	...

```

## 课程总结

### 一、深度优先搜索和广度优先搜索

深度优先搜索和广度优先搜索是图中常用的搜索算法，在树和二叉树中，这两种搜索算法被广泛使用。

深度优先搜索使用栈数据结构，常用递归实现，也可以手动维护栈使用迭代实现。

广度优先搜索使用队列数据结构，常用迭代实现。

深度优先搜索可访问到所有可到达的节点，但不保证最短距离，广度优先搜索不仅可访问到所有可到达的节点，还能保证最短距离。

### 二、贪心算法

贪心算法的核心是“贪心”，即每一步选择都只考虑当前状态下最有利的选择。由于贪心算法不能回退，因此虽然贪心算法可以解决一些最优化问题，但是并不总是能得到最优解。

### 三、二分查找

二分查找的适用条件包括：目标函数单调性、存在上下界、能够通过索引访问。

二分查找的套路是，根据上下界找到中间位置，判断中间位置的值和目标值的关系，如果相等则直接返回，否则判断中间位置的哪一侧的查找范围应该保留，将查找范围缩小一半后继续查找，直到找到目标值或者下界大于上界。

实际使用二分查找时，需要对于具体问题考虑上界和下界的定义、二分查找的条件和更新上界和下界的规则。

## 作业：使用二分查找，寻找半有序数组中间无序的地方

每次首先判断下界位置元素是否小于上界位置元素，如果小于，则下界位置元素即为最小值，否则进入二分查找。

根据下界位置和上界位置计算得到中间位置，考虑以下两种情况。

1. 如果中间位置元素小于下界位置元素，则最小值一定在下界位置到中间位置范围内，包含中间位置，因此将上界位置设为中间位置。

2. 如果中间位置元素大于或等于下界位置元素，则最小值一定在中间位置右侧到上界位置范围内，不包含中间位置，因此将下界位置设为中间位置右侧一位。

实现：

```js
var find = function (nums) {
  if (!nums) return -1;
  var left = 0;
  var right = nums.length - 1;

  while (left < right) {
    if (nums[left] < nums[right]) break;
    var mid = (right - left) / 2 + left;
    if (nums[mid] < nums[left]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
```
