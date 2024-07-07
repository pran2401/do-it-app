<%@ taglib prefix="c" uri="jakarta.tags.core"%>
<html>
<head>
<link href="webjars/bootstrap/5.1.3/css/bootstrap.min.css"
	rel="stylesheet">
<body>
	<div class="container">
		<h1>here is todo list</h1>
		<br>

		<table class="table">
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>description</th>
					<th>date</th>
					<th>completed</th>
				</tr>
			</thead>
			<c:forEach items="${todos}" var="todo">
				<tr>
					<td>${todo.id}</td>
					<td>${todo.username}</td>
					<td>${todo.description}</td>
					<td>${todo.date}</td>
					<td>${todo.done}</td>
				</tr>
			</c:forEach>

		</table>
	</div>
	<script src="webjars/bootstrap/5.1.3/js/bootstrap.min.js"></script>
	<script src="webjars/jquery/3.6.0/jquery.min.js"></script>
</body>
</html>