<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Starbucks Coffee Korea</title>
	<!--favicon.ico 하면 자동으로 찾아서 넣음-->

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Starbucks" />
	<meta property="og:title" content="Starbucks Coffee Korea" />
	<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
	<meta property="og:image" content="${pageContext.request.contextPath}/resources/images/starbucks_seo.jpg" />
	<meta property="og:url" content="https://starbucks.co.kr" />

	<meta property="twitter:card" content="summary" />
	<meta property="twitter:site" content="Starbucks" />
	<meta property="twitter:title" content="Starbucks Coffee Korea" />
	<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
	<meta property="twitter:image" content="${pageContext.request.contextPath}/resources/images/starbucks_seo.jpg" />
	<meta property="twitter:url" content="https://starbucks.co.kr" />

	<link rel="icon" href="./favicon.png" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/main.css" />

	<script defer src="${pageContext.request.contextPath}/resources/js/main.js"></script>  <!--defer속성 필수-->
</head>

<body>

<!-- HEADER -->
<header>
	<div class="inner">

		<a href="/" class="logo">
			<img src="${pageContext.request.contextPath}/resources/images/starbucks_logo.png" alt="STARBUCKS" />
		</a>

		<div class="sub-menu">
			<ul class="menu">
				<li>
					<a href="/signin">Sign In</a>
				</li>
				<li>
					<a href="javascript:void(0)">My Starbucks</a>
				</li>
				<li>
					<a href="javascript:void(0)">Customer Service & Ideas</a>
				</li>
				<li>
					<a href="javascript:void(0)">Find a Store</a>
				</li>
			</ul>
			<div class="search">
				<input type="text"/>
				<div class="material-icons">
					search
				</div>
			</div>
		</div>

	</div>
</header>

</body>

</html>