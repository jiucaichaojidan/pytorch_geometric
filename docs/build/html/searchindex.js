Search.setIndex({docnames:["index","modules/data","modules/datasets","modules/nn","modules/transforms","modules/utils","notes/create_dataset","notes/installation","notes/introduction"],envversion:53,filenames:["index.rst","modules/data.rst","modules/datasets.rst","modules/nn.rst","modules/transforms.rst","modules/utils.rst","notes/create_dataset.rst","notes/installation.rst","notes/introduction.rst"],objects:{"torch_geometric.data":{Batch:[1,1,1,""],Data:[1,1,1,""],DataLoader:[1,1,1,""],Dataset:[1,1,1,""],InMemoryDataset:[1,1,1,""],download_url:[1,5,1,""],extract_tar:[1,5,1,""],extract_zip:[1,5,1,""]},"torch_geometric.data.Batch":{cumsum:[1,2,1,""],from_data_list:[1,3,1,""],num_graphs:[1,4,1,""]},"torch_geometric.data.Data":{apply:[1,2,1,""],cat_dim:[1,2,1,""],contains_isolated_nodes:[1,2,1,""],contains_self_loops:[1,2,1,""],contiguous:[1,2,1,""],from_dict:[1,3,1,""],is_coalesced:[1,2,1,""],is_directed:[1,2,1,""],is_undirected:[1,2,1,""],keys:[1,4,1,""],num_classes:[1,4,1,""],num_edges:[1,4,1,""],num_features:[1,4,1,""],num_nodes:[1,4,1,""],to:[1,2,1,""]},"torch_geometric.data.Dataset":{download:[1,2,1,""],get:[1,2,1,""],process:[1,2,1,""],processed_file_names:[1,4,1,""],processed_paths:[1,4,1,""],raw_file_names:[1,4,1,""],raw_paths:[1,4,1,""]},"torch_geometric.data.InMemoryDataset":{collate:[1,2,1,""],download:[1,2,1,""],get:[1,2,1,""],process:[1,2,1,""],processed_file_names:[1,4,1,""],raw_file_names:[1,4,1,""],shuffle:[1,2,1,""],split:[1,2,1,""]},"torch_geometric.datasets":{FAUST:[2,1,1,""],MNISTSuperpixels:[2,1,1,""],ModelNet:[2,1,1,""],Planetoid:[2,1,1,""],QM9:[2,1,1,""],ShapeNet:[2,1,1,""],TUDataset:[2,1,1,""]},"torch_geometric.datasets.FAUST":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.MNISTSuperpixels":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.ModelNet":{download:[2,2,1,""],process:[2,2,1,""],process_set:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],urls:[2,4,1,""]},"torch_geometric.datasets.Planetoid":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.QM9":{data_url:[2,4,1,""],download:[2,2,1,""],mask_url:[2,4,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""]},"torch_geometric.datasets.ShapeNet":{categories:[2,4,1,""],download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.TUDataset":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.nn":{conv:[3,0,0,"-"],pool:[3,0,0,"-"],prop:[3,0,0,"-"]},"torch_geometric.nn.conv":{ChebConv:[3,1,1,""],GATConv:[3,1,1,""],GCNConv:[3,1,1,""],NNConv:[3,1,1,""],SplineConv:[3,1,1,""]},"torch_geometric.nn.conv.ChebConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GATConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GCNConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.NNConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.SplineConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.pool":{avg_pool:[3,5,1,""],avg_pool_x:[3,5,1,""],graclus:[3,5,1,""],max_pool:[3,5,1,""],max_pool_x:[3,5,1,""],voxel_grid:[3,5,1,""]},"torch_geometric.nn.prop":{AGNNProp:[3,1,1,""],GCNProp:[3,1,1,""]},"torch_geometric.nn.prop.AGNNProp":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.prop.GCNProp":{forward:[3,2,1,""]},"torch_geometric.transforms":{AddSelfLoops:[4,1,1,""],Cartesian:[4,1,1,""],Center:[4,1,1,""],Compose:[4,1,1,""],FaceToEdge:[4,1,1,""],LinearTransformation:[4,1,1,""],LocalCartesian:[4,1,1,""],NNGraph:[4,1,1,""],NormalizeFeatures:[4,1,1,""],NormalizeScale:[4,1,1,""],Polar:[4,1,1,""],RadiusGraph:[4,1,1,""],RandomFlip:[4,1,1,""],RandomRotate:[4,1,1,""],RandomScale:[4,1,1,""],RandomShear:[4,1,1,""],RandomTranslate:[4,1,1,""],SamplePoints:[4,1,1,""],Spherical:[4,1,1,""],TargetIndegree:[4,1,1,""]},"torch_geometric.utils":{add_self_loops:[5,5,1,""],coalesce:[5,5,1,""],contains_isolated_nodes:[5,5,1,""],contains_self_loops:[5,5,1,""],degree:[5,5,1,""],grid:[5,5,1,""],is_coalesced:[5,5,1,""],is_undirected:[5,5,1,""],matmul:[5,5,1,""],normalized_cut:[5,5,1,""],one_hot:[5,5,1,""],remove_self_loops:[5,5,1,""],softmax:[5,5,1,""],to_undirected:[5,5,1,""]},torch_geometric:{data:[1,0,0,"-"],datasets:[2,0,0,"-"],transforms:[4,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:function"},terms:{"130k":[],"2x6":[],"3dshapenet":2,"case":7,"class":[1,2,3,4],"default":[3,4,5],"float":[3,4,8],"function":[3,7,8],"import":[4,5,7,8],"int":[3,4,5],"long":8,"return":5,"short":8,"static":1,"true":[1,2,3,4,8],For:[],The:[3,4,5,7],Then:7,These:7,Using:[],abs:3,access:7,adapt:3,add:[3,7],add_self_loop:5,addit:[0,3],addselfloop:4,adj:3,against:8,aggreg:3,agnn:3,agnnprop:3,airplan:2,all:[],along:4,amazonaw:2,anaconda:7,angl:3,anytim:8,appli:[1,4],approxim:[],arbitrari:[0,8],arxiv:3,attent:3,attribut:[4,8],automat:[],avail:7,averag:3,avg_pool:3,avg_pool_x:3,awdawd:[],axi:4,bag:2,base:[0,3,7],basi:3,batch:[0,1,3],being:[4,8],benchmark:0,besid:8,between:[],bia:3,bin:7,bool:[3,4],both:0,bring:8,build:7,call:7,callabl:[],can:[7,8],cap:2,car:2,cartesian:4,cat:4,cat_dim:1,categori:2,ccompil:7,center:4,cffi:7,chair:2,chebconv:3,chebyshev:3,check:7,chemistri:3,classfic:3,clone:7,close:3,cloud:0,cluster:[3,7],cmd:7,cnn:[],coalesc:5,coeffici:3,collat:1,com:[2,7],come:7,common:0,compil:7,compos:4,comput:[3,4,5],concat:[3,4],concept:8,connect:8,consist:0,contain:8,contains_isolated_nod:[1,5,8],contains_self_loop:[1,5,8],contigu:1,continu:3,contrast:4,contribut:[],conv:7,convolv:3,coo:8,coordin:[3,4],core:8,correspond:4,cpath:7,cpp:[],cpu:7,creat:0,cuda:8,cumsum:1,custom:[],cvpr:3,cvpr_geometric_dl:2,data:[0,2,3,4],data_list:1,data_url:2,dataload:1,dataset:[0,1],decrib:8,deep:[0,3],deepchem:2,def:7,defin:[3,4],degre:[3,4,5],deni:7,desir:5,devic:[1,5,8],dictionari:1,dim:3,dimens:4,dimension:[3,4],direct:8,directori:[],distutil:7,docker:7,doesn:[],dortmund:2,download:[1,2],download_url:1,dropout:3,dry_run:7,dtype:[4,5,8],dure:3,each:[3,4],earphon:2,easi:0,easili:7,edg:[4,5,8],edge_attr:[1,3,4,5,8],edge_index:[1,3,4,5,8],edu:2,eleg:[],end:3,ensur:7,environ:7,errno:7,error:7,exactli:[],exampl:0,exist:[],expos:3,extend:8,extens:0,extract_tar:1,extract_zip:1,face:8,facetoedg:4,fact:8,factor:4,failur:7,fals:[3,8],fast:3,faust:2,featur:[3,8],fei:3,ffi:7,figshar:2,file:[2,7],filter:3,find:7,first:7,fix:4,fixabl:7,flip:4,floattensor:[],folder:1,forget:7,format:8,forward:3,found:8,four:8,from:[0,3,4,5,7,8],from_data_list:1,from_dict:1,func:1,fundament:8,gat:3,gatconv:3,gcnconv:3,gcnprop:3,gdb9:2,geometr:[3,7,8],geometricdeeplearn:[],get:1,gilmer:3,git:7,github:[2,7],given:[4,5],global:4,gpu:[7,8],graclu:3,graph:[0,3],graphconv:[],graphkerneldataset:2,grid:5,guitar:2,handl:[],have:7,head:3,height:5,help:0,hold:8,hop:3,howev:7,http:[2,3,7],iccv17:2,idx:1,imag:7,implement:7,in_channel:3,in_featur:[],includ:7,index:[0,1,5],indic:5,inform:8,inmemorydataset:1,input:3,instal:0,instead:4,interfac:0,interv:4,introduc:[7,8],introduct:0,is_coalesc:[1,5],is_direct:[1,8],is_open_splin:3,is_undirect:[1,5],issu:[],item:[1,8],its:[4,8],just:8,kei:[1,8],kernel:[3,7],kernel_s:3,kilo:[],kimiyoung:2,knife:2,known:0,kwarg:1,lamp:2,laptop:2,larg:0,leakyrelu:3,learn:[0,3],librari:0,lineartransform:4,link:[4,7],list:4,loader:0,local:[3,4,7],localcartesian:4,locat:[],log:1,longtensor:5,lot:7,ls11:2,ls7:2,main:8,manifold:[],manual:[],map:[3,4],mask_url:2,master:2,matmul:5,matrix:[4,8],max_pool:3,max_pool_x:3,maximum:4,meaning:7,mesh:[0,8],messag:[3,7],method:0,mini:0,miniconda:7,mixtur:[],mnist:[],mnist_superpixel:2,mnistsuperpixel:2,mode:1,model:[],modelnet10:2,modelnet40:2,modelnet:2,modul:0,molecul:[],moreov:[],morri:2,motorbik:2,mpg:2,mpi:[],mug:2,multi:3,multipl:[],must:[],name:2,ndownload:2,need:7,neg:3,negative_slop:3,neighborhood:3,network:3,neural:3,newli:7,nnconv:3,nngraph:4,node:[3,4,5,8],none:[1,2,3,5,8],norm:3,normal:[3,4],normalized_cut:5,normalizefeatur:4,normalizescal:4,note:[0,8],num:4,num_class:[1,5],num_dimens:8,num_edg:[1,8],num_edge_featur:8,num_fac:8,num_featur:[1,8],num_graph:1,num_nod:[1,5,8],num_node_featur:8,number:[0,3,4,5,8],nvcc:7,obect:8,object:[4,8],occur:7,offlin:4,old:8,one:[],one_hot:5,onto:8,open:3,oper:3,option:[3,4,5],order:7,org:3,other:[4,7],otherwis:[],out:8,out_channel:3,out_featur:[],output:[3,5],outsid:[],outsourc:7,over:3,own:[0,7],packag:[0,7],paper:[0,3],paramet:[3,4,5],partseg:2,pass:3,path:[1,7],peopl:2,permiss:7,pip:7,pistol:2,plain:8,planetoid:2,pleas:7,point:0,polar:4,pos:[1,3,4,8],posit:[4,8],pre_transform:[1,2],prevent:7,princeton:2,print:[4,5,8],probabl:4,process:[1,2],process_set:2,processed_file_nam:[1,2],processed_path:1,product:3,project:2,propbabl:3,properti:[],provid:8,pseudo:[3,4],publish:0,python:[7,8],pytorch:[7,8],pytorch_scatt:7,qm9:2,quantum:3,radiusgraph:4,random:4,randomflip:4,randomli:4,randomrot:4,randomscal:4,randomshear:4,randomtransl:4,rang:4,rare:7,raw:2,raw_file_nam:[1,2],raw_path:1,receiv:8,recommend:7,refer:0,relat:4,remove_self_loop:5,replac:[4,7],requir:8,requires_grad:3,reset_paramet:3,respect:7,result:4,rocket:2,root:[1,2,3,7],root_weight:3,row:[],run:7,rusty1:7,same:4,sampl:[3,4],samplepoint:4,save:[4,8],scale:4,scatter:7,scatter_add_:[],self:[7,8],semi:3,sequenc:4,sequenti:3,set:3,setup:7,sever:4,shape:[4,8],shapenet:2,shear:4,shortli:8,should:7,show:8,shuffl:1,simpl:[0,8],singl:[3,8],size:3,skateboard:2,slope:3,softmax:5,some:8,sourc:[1,2,3,4,5],spatial:4,spawn:7,specifi:[],spectral:3,spheric:4,spline:[3,7],splinecnn:3,splineconv:3,split:1,squar:4,src:5,stanford:2,start:3,stochast:3,straightforward:7,string:[],structur:[],subprocess:7,succes:7,sum:[],superpixel:[],supervis:3,system:7,tabl:2,take:[],tar:2,target:[4,5,8],targetindegre:4,tensor:[3,4,5,8],termin:7,test:7,them:4,therefor:7,three:[4,8],through:8,to_undirect:5,togeth:4,top:7,torch:[4,5,7,8],torch_geometr:[0,8],torch_scatt:[],train:[2,3,8],trainabl:3,transform:[0,1,2,3],translat:4,triangl:8,tudataset:2,tue:2,tupl:4,two:4,type:[5,7],unfortun:7,uni:2,uniqu:7,unweight:8,upgrad:7,url:[1,2],use:[0,3],used:4,user:7,using:3,usr:7,util:[0,8],valu:[4,5],varieti:0,variou:0,vector:[],veri:7,verifi:7,version:7,virtual:[],vision:2,voxel_grid:3,wadawd:[],websit:2,weight:3,well:0,west:2,where:[3,4,7],whether:3,which:[7,8],width:5,wise:[],within:4,www:2,you:[7,8],your:[0,7,8],zero:[],zip:2},titles:["PyTorch Geometric documentation","torch_geometric.data","torch_geometric.datasets","torch_geometric.nn","torch_geometric.transforms","torch_geometric.utils","Create your own dataset","Installation","Introduction by example"],titleterms:{"function":[],batch:[],benchmark:8,cites:[],common:[7,8],content:3,convolut:3,cora:[],creat:6,cuda:7,data:[1,8],dataset:[2,6,8],document:0,exampl:8,extens:7,faust:[],geometr:0,graph:8,handl:8,indic:0,instal:7,introduct:8,issu:7,layer:3,learn:8,maco:7,method:8,mnistsuperpixel:[],modul:[],own:6,pool:3,propag:3,pubm:[],pytorch:0,qm9:[],tabl:0,torch_geometr:[1,2,3,4,5],transform:[4,8],util:5,wise:[],your:6}})