loop(Req, DocRoot) ->
"/" ++ Path = Req:get(path),
case Req:get(method) of
Method when Method =:= 'GET'; Method =:= 'HEAD' ->
case Path of
_ ->
Req:serve_file(Path, DocRoot)
end;
'POST' ->
case Path of
"pdf" ->
Posted = Req:parse_post(),

Html = proplists:get_value("html", Posted),
TmpHtml = "/tmp/" ++ lists:concat(tuple_to_list(now())) ++ ".html",
PdfFileName = lists:concat(tuple_to_list(now())) ++ ".pdf",
TmpPdf = "/tmp/" ++ PdfFileName,

ok = file:write_file(TmpHtml, Html),

Cmd = "wkhtmltopdf " ++ TmpHtml ++ " " ++ TmpPdf,

os:cmd(Cmd),
{ok, PdfFile} = file:read_file(TmpPdf),

file:delete(TmpHtml),
file:delete(TmpPdf),

Req:ok({"application/pdf", [], [PdfFile]});

_ ->
Req:not_found()
end;
_ ->
Req:respond({501, [], []})
end.
