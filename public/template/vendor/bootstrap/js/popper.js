plyPatchDifferentiatedDialog; e 1Lcom/intellij/openapi/actionSystem/AnActionEvent; project &Lcom/intellij/openapi/project/Project; dataContext /Lcom/intellij/openapi/actionSystem/DataContext; changeLists LocalVariableTypeTable QLjava/util/List<Lcom/intellij/openapi/vcs/changes/shelf/ShelvedBinaryFilePatch;>; LLjava/util/List<Lcom/intellij/openapi/vcs/changes/shelf/ShelvedChangeList;>; StackMapTable � � � � � !unshelveMultipleShelveChangeLists Y(Lcom/intellij/openapi/project/Project;Ljava/util/List;Ljava/util/List;Ljava/util/List;)V binaryFiles changes suggestedName Ljava/lang/String; changeListManager 4Lcom/intellij/openapi/vcs/changes/ChangeListManager; chooser 7Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser; LLjava/util/List<Lcom/intellij/openapi/vcs/changes/shelf/ShelvedBinaryFile;>; HLjava/util/List<Lcom/intellij/openapi/vcs/changes/shelf/ShelvedChange;>; � � � 	Signature	(Lcom/intellij/openapi/project/Project;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/shelf/ShelvedChangeList;>;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/shelf/ShelvedBinaryFile;>;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/shelf/ShelvedChange;>;)V $RuntimeInvisibleParameterAnnotations #Lorg/jetbrains/annotations/NotNull; hasNotAllSelectedChanges �(Lcom/intellij/openapi/project/Project;Lcom/intellij/openapi/vcs/changes/shelf/ShelvedChangeList;[Lcom/intellij/openapi/vcs/changes/Change;)Z list *[Lcom/intellij/openapi/vcs/changes/Change; $Lorg/jetbrains/annotations/Nullable; update � � � !createRemoveFilesStrategyCheckbox ?(Lcom/intellij/openapi/project/Project;)Ljavax/swing/JCheckBox; removeOptionCheckBox Ljavax/swing/JCheckBox; shelveChangesManager =Lcom/intellij/openapi/vcs/changes/shelf/ShelveChangesManager; RuntimeInvisibleAnnotations 
access$000 x0 
access$100 x1 x2 
SourceFile UnshelveWithDialogAction.java x y � � D E � � � � � $com/intellij/openapi/project/Project � � � � � � � � � � � � � E � � � � � � e f �  8com/intellij/openapi/vcs/changes/shelf/ShelvedChangeList � java/io/File j D Can not find path file	 'com/intellij/openapi/util/NamedRunnable
 BootstrapMethods � Pcom/intellij/openapi/vcs/changes/shelf/UnshelveWithDialogAction$MyUnshelveDialog D reference.dialogs.vcs.unshelve E  j � �! Acom/intellij/openapi/vcs/changes/shelf/UnshelveWithDialogAction$1"#$ !unshelve.changelist.chooser.title java/lang/Object%&' D( �) �* �+,$-./012 �34 javax/swing/JCheckBox 0Remove successfully applied files from the shelf java/awt/event/KeyEvent567 �84 Acom/intellij/openapi/vcs/changes/shelf/UnshelveWithDialogAction$2 D9:; ?com/intellij/openapi/vcs/changes/shelf/UnshelveWithDialogAction ,com/intellij/openapi/project/DumbAwareAction -com/intellij/openapi/actionSystem/DataContext java/util/List $com/intellij/openapi/vfs/VirtualFile java/lang/String 2com/intellij/openapi/vcs/changes/ChangeListManager 5com/intellij/openapi/vcs/changes/ui/ChangeListChooser .com/intellij/openapi/actionSystem/Presentation /com/intellij/openapi/actionSystem/AnActionEvent getEventProject Y(Lcom/intellij/openapi/actionSystem/AnActionEvent;)Lcom/intellij/openapi/project/Project; com/intellij/util/ObjectUtils assertNotNull &(Ljava/lang/Object;)Ljava/lang/Object; getDataContext 1()Lcom/intellij/openapi/actionSystem/DataContext; @com/intellij/openapi/vcs/changes/shelf/ShelvedChangesViewManager getShelvedLists A(Lcom/intellij/openapi/actionSystem/DataContext;)Ljava/util/List; isEmpty ()Z 3com/intellij/openapi/fileEditor/FileDocumentManager getInstance 7()Lcom/intellij/openapi/fileEditor/FileDocumentManager; saveAllDocuments size ()I getBinaryShelveChanges getShelveChanges get (I)Ljava/lang/Object; (com/intellij/openapi/vfs/LocalFileSystem ,()Lcom/intellij/openapi/vfs/LocalFileSystem; PATH (Ljava/lang/String;)V refreshAndFindFileByIoFile 6(Ljava/io/File;)Lcom/intellij/openapi/vfs/VirtualFile; #com/intellij/openapi/ui/MessageType ERROR %Lcom/intellij/openapi/ui/MessageType; 5com/intellij/openapi/vcs/ui/VcsBalloonProblemNotifier showOverChangesView �(Lcom/intellij/openapi/project/Project;Ljava/lang/String;Lcom/intellij/openapi/ui/MessageType;[Lcom/intellij/openapi/util/NamedRunnable;)V getBinaryFiles ()Ljava/util/List;
<=
>? {(Lcom/intellij/openapi/vcs/changes/shelf/ShelvedBinaryFile;)Lcom/intellij/openapi/vcs/changes/shelf/ShelvedBinaryFilePatch; fun ()Lcom/intellij/util/Function; *com/intellij/util/containers/ContainerUtil map D(Ljava/util/Collection;Lcom/intellij/util/Function;)Ljava/util/List; $com/intellij/openapi/vcs/VcsDataKeys CHANGES +Lcom/intellij/openapi/actionSystem/DataKey; getData ?(Lcom/intellij/openapi/actionSystem/DataKey;)Ljava/lang/Object; �(Lcom/intellij/openapi/project/Project;Lcom/intellij/openapi/vfs/VirtualFile;Lcom/intellij/openapi/vcs/changes/shelf/ShelvedChangeList;Ljava/util/List;[Lcom/intellij/openapi/vcs/changes/Change;)V Ecom/intellij/openapi/vcs/changes/patch/ApplyPatchDifferentiatedDialog 	setHelpId show DESCRIPTION \(Lcom/intellij/openapi/project/Project;)Lcom/intellij/openapi/vcs/changes/ChangeListManager; getChangeListsCopy getDefaultChangeList 4()Lcom/intellij/openapi/vcs/changes/LocalChangeList; "com/intellij/openapi/vcs/VcsBundle message 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; �(Lcom/intellij/openapi/project/Project;Ljava/util/Collection;Lcom/intellij/openapi/vcs/changes/ChangeList;Ljava/lang/String;Ljava/lang/String;Lcom/intellij/openapi/project/Project;)V 
showAndGet ;com/intellij/openapi/vcs/changes/shelf/ShelveChangesManager e(Lcom/intellij/openapi/project/Project;)Lcom/intellij/openapi/vcs/changes/shelf/ShelveChangesManager; getSelectedList unshelveSilentlyAsynchronously �(Lcom/intellij/openapi/project/Project;Ljava/util/List;Ljava/util/List;Ljava/util/List;Lcom/intellij/openapi/vcs/changes/LocalChangeList;)V 
getChanges 8(Lcom/intellij/openapi/project/Project;)Ljava/util/List; getPresentation 2()Lcom/intellij/openapi/actionSystem/Presentation; 
setEnabled (Z)V setMnemonic (I)V isRemoveFilesFromShelf setSelected W(Lcom/intellij/openapi/vcs/changes/shelf/ShelveChangesManager;Ljavax/swing/JCheckBox;)V addActionListener "(Ljava/awt/event/ActionListener;)V@ADE DF "java/lang/invoke/LambdaMetafactory metafactoryH Lookup �(Ljava/lang/invoke/MethodHandles$Lookup;Ljava/lang/String;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodHandle;Ljava/lang/invoke/MethodType;)Ljava/lang/invoke/CallSite; =com/intellij/openapi/vcs/changes/shelf/ShelvedBinaryFilePatch =(Lcom/intellij/openapi/vcs/changes/shelf/ShelvedBinaryFile;)VI %java/lang/invoke/MethodHandles$Lookup java/lang/invoke/MethodHandles $$$reportNull$$$0J6
 @K >Argument for @NotNull parameter '%s' of %s.%s must not be nullM *@NotNull method %s.%s must not return nullO W [ g h z � � e x formatZ'
 q[ "java/lang/IllegalArgumentException]
^ � java/lang/IllegalStateException`
a � [Ljava/lang/Object;c java/lang/RuntimeExceptione !  A     	  D E  F   /     *� �    H        I J   G       6  K L  F  �  	   �+� � � M+� N-� :� 	 � �� 
� �  � ,-� -� � � l�  � :� � Y� � � :� ,� � � �� �   � :� Y,+� �  � !� ":#� $� %�    H   \ 	 P \ M N  d H O P  � & Q R  �  S T    � I J     � U V   � W X   � Y Z   � [ R  \     � & Q ]   � [ ^  G   N    9  :  ;  < ! > ' @ 2 A C D P E d F i G v H w J y K � L � M � N � O � Q _    � !  a b!� 3  d� 4 
 e f  F  7     o*� �L+� �L,� �L-� �L+�  � � &:*� ':� (Y*� )� *+� ,� -*� .:� /� �*� 0*+-,� 1� 2�    H   H    o W X     o [ R    o g R    o h R  / @ i j  5 : k l  U  m n  \        o [ ^    o g o    o h p  G   * 
   W / X 5 Y < Z J [ U b ^ c h d k c n e _    � = q r ( t    u v     w    w    w    w   
 x y  F   ~     3*� �L+� �L,�  +*� 3�  +� �  `,�� � �    H        3 W X     3 z N    3 h {  G      h _     @ v     w    w    |    } L  F   x     #+� 4+� � +� � � 	 � � � 5�    H       # I J     # U V  G   
    m " n _    ^ ~�    @ �  ~ 
 � �  F   �     >*� �L� 6Y7� 8L+R� :*� 0M+,� ;� <+� =Y,+� >� ?+Y� �L�    H        > W X    + � �     � �  G     	 �  �  �  � & � 3 � _    	� 3   6 �  6 �     w   v     w   � �  F   /     *� �    H        � X   G       6 � y  F   E     *+,� �    H         � X      � N     � {  G       6
J6  F  �    ��     /          /   /   /   /   /   /   /   5N� 	P� �     /          /   /   /   /   /   /   /   3� � � ,�      0          0   9   B   K   0   T   0   ]YQS� 0YRS� 'YSS� YTS� YUS� YVS� �   -          -   -   -   -   -   -   -   6YVS� YWS� �   -          -   -   -   -   6   6   ?   HYXS� YYS� YWS� � �\�    .          .   .   .   .   .   .   .   9�^Z_�_� �aZ_�b� �    _   � 0E qo qC q�    q� 3   qd�    qd�    qd�    qd�    qd�    qd�    qd� -   qd�    qd�    qd� -   qd�    qd�    qd�    qd�    qdq qJ qJf  �     �  � � � �    � C   "    B 
 =      (     BGC PK
    �J�L�鄍�  �  C   com/intellij/openapi/vcs/changes/ui/AbstractSelectFilesDialog.class����   4 �
 / m	 . n	 . o	 . p q
  r s
  t
  u v
 
 w
  x
 . y	 . z
  {	 | } ~ 
 / �	 | �
 / �
 . � � �
  t
  �
 . � �
  �
 � � � � � �
 � �
  r �
 . �
 � � �
 � � � � �
 * t
 � �
 * � � � myDoNotShowCheckbox Ljavax/swing/JCheckBox; myConfirmationOption 4Lcom/intellij/openapi/vcs/VcsShowConfirmationOption; myPrompt Ljava/lang/String; myShowDoNotAskOption Z <init> q(Lcom/intellij/openapi/project/Project;ZLcom/intellij/openapi/vcs/VcsShowConfirmationOption;Ljava/lang/String;Z)V Code LineNumberTable LocalVariableTable this ?Lcom/intellij/openapi/vcs/changes/ui/AbstractSelectFilesDialog; project &Lcom/intellij/openapi/project/Project; canBeParent confirmationOption prompt showDoNotAskOption LocalVariableTypeTable DLcom/intellij/openapi/vcs/changes/ui/AbstractSelectFilesDialog<TT;>; getFileList 3()Lcom/intellij/openapi/vcs/changes/ui/ChangesTree; RuntimeInvisibleAnnotations #Lorg/jetbrains/annotations/NotNull; createPromptLabel ()Ljavax/swing/JLabel; label Ljavax/swing/JLabel; StackMapTable $Lorg/jetbrains/annotations/Nullable; createNorthPanel ()Ljavax/swing/JComponent; 
doOKAction ()V doCancelAction getPreferredFocusedComponent createCenterPanel panel Ljavax/swing/JPanel; � createToolbar group 6Lcom/intellij/openapi/actionSystem/DefaultActionGroup; toolbar 1Lcom/intellij/openapi/actionSystem/ActionToolbar; createToolbarActions 8()Lcom/intellij/openapi/actionSystem/DefaultActionGroup; action ,Lcom/intellij/openapi/actionSystem/AnAction; actions -[Lcom/intellij/openapi/actionSystem/AnAction; � � e 	Signature =<T:Ljava/lang/Object;>Lcom/intellij/openapi/ui/DialogWrapper; 
SourceFile AbstractSelectFilesDialog.java 8 � 2 3 4 5 6 7 javax/swing/JLabel 8 � (com/intellij/openapi/ui/MultiLineLabelUI 8 T � � javax/swing/border/EmptyBorder 8 � � � K L 0 1 � � � � � � � � S T � � U T G H javax/swing/JPanel java/awt/BorderLayout 8 � [ R North � � � � � Center javax/swing/JCheckBox dialog.options.do.not.ask java/lang/Object � � � South ` a � � � VcsSelectFilesDialog � � � � R 4com/intellij/openapi/actionSystem/DefaultActionGroup � � � � � =com/intellij/openapi/vcs/changes/ui/AbstractSelectFilesDialog %com/intellij/openapi/ui/DialogWrapper *(Lcom/intellij/openapi/project/Project;Z)V (Ljava/lang/String;)V setUI (Ljavax/swing/plaf/LabelUI;)V (IIII)V 	setBorder (Ljavax/swing/border/Border;)V 
isSelected ()Z 8com/intellij/openapi/vcs/VcsShowConfirmationOption$Value Value InnerClasses DO_ACTION_SILENTLY :Lcom/intellij/openapi/vcs/VcsShowConfirmationOption$Value; 2com/intellij/openapi/vcs/VcsShowConfirmationOption setValue =(Lcom/intellij/openapi/vcs/VcsShowConfirmationOption$Value;)V DO_NOTHING_SILENTLY (Ljava/awt/LayoutManager;)V add )(Ljava/awt/Component;Ljava/lang/Object;)V !com/intellij/ui/ScrollPaneFactory createScrollPane /(Ljava/awt/Component;)Ljavax/swing/JScrollPane; com/intellij/CommonBundle message 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; /com/intellij/openapi/actionSystem/ActionManager getInstance 3()Lcom/intellij/openapi/actionSystem/ActionManager; createActionToolbar u(Ljava/lang/String;Lcom/intellij/openapi/actionSystem/ActionGroup;Z)Lcom/intellij/openapi/actionSystem/ActionToolbar; /com/intellij/openapi/actionSystem/ActionToolbar getComponent /com/intellij/openapi/vcs/changes/ui/ChangesTree getTreeActions /()[Lcom/intellij/openapi/actionSystem/AnAction; /(Lcom/intellij/openapi/actionSystem/AnAction;)V $$$reportNull$$$0 (I)V � �
 . � *@NotNull method %s.%s must not return null � � ` java/lang/String � format � �
 � � java/lang/IllegalStateException �
 � r! f /     0 1    2 3    4 5    6 7     8 9  :   �     *+� *-� *� *� �    <   >     = >      ? @     A 7     B 3     C 5     D 7  E        = F   ;       /  0  1  2  3 G H  I     J    K L  :   �     1*� � +� Y*� � L+� Y� � 	+� 
Y� � +��    <       M N    1 = >   E       1 = F   ;       :  ;  <  = - > / @ O    / I     P    Q R  :   A     *� �    <        = >   E        = F   ;       E  S T  :   s     "*� � *� � � *� � �  *� �    <       " = >   E       " = F   ;       I  J  L ! M O      U T  :   s     "*� � *� � � *� � �  *� �    <       " = >   E       " = F   ;       Q  R  T ! U O      V R  :   A     *� �    <        = >   E        = F   ;       Y  W R  :   �     M� Y� Y� � L+*� � +*� � � *� � !*� Y � !� "� #� +*� $� +�    <       M = >    > X Y  E       M = F   ;       ^  _  a & c - d A e K g O    � K  I     P    [ R  :   o     *� %L� &'+� (M,� ) �    <         = >     \ ]    ^ _  E        = F   ;       k  l  m  ` a  :   �     <� *Y� +L*� � ,M,N-�66� -2:+� -����+Y� � ɰ    <   *  &  b c    < = >    4 \ ]   , d e  E       < = F   ;       r  s  t & u , t 2 w O    �   . * h h  H * I     J  
 � �  :   (     �� !Y�SY�S� һ �Z_� տ      i    j k    l �   
  | ~ �@PK
    �J�LBC4'  '  @   com/intellij/openapi/vcs/changes/ui/AlienChangeListBrowser.class����   4 �
  D	  E	  F
  G	  H
 I J
 I K
  L
 M N	  O
 P Q R
 P S
 T U	 V W
 X Y Z
  [ \ ] myChangeList 2Lcom/intellij/openapi/vcs/changes/LocalChangeList; RuntimeInvisibleAnnotations #Lorg/jetbrains/annotations/NotNull; 	myChanges Ljava/util/List; 	Signature ;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>; <init> k(Lcom/intellij/openapi/project/Project;Lcom/intellij/openapi/vcs/changes/LocalChangeList;Ljava/util/List;)V Code LineNumberTable LocalVariableTable this <Lcom/intellij/openapi/vcs/changes/ui/AlienChangeListBrowser; project &Lcom/intellij/openapi/project/Project; 
changelist changes LocalVariableTypeTable �(Lcom/intellij/openapi/project/Project;Lcom/intellij/openapi/vcs/changes/LocalChangeList;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>;)V $RuntimeInvisibleParameterAnnotations buildTreeModel %()Ljavax/swing/tree/DefaultTreeModel; 	decorator ELcom/intellij/openapi/vcs/changes/ui/RemoteStatusChangeNodeDecorator; getSelectedChangeList 4()Lcom/intellij/openapi/vcs/changes/LocalChangeList; getDisplayedChanges ()Ljava/util/List; =()Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>; getSelectedChanges getIncludedChanges getDisplayedUnversionedFiles :()Ljava/util/List<Lcom/intellij/openapi/vfs/VirtualFile;>; getSelectedUnversionedFiles getIncludedUnversionedFiles updateDisplayedChangeLists ()V getData &(Ljava/lang/String;)Ljava/lang/Object; dataId Ljava/lang/String; StackMapTable $Lorg/jetbrains/annotations/Nullable; 
SourceFile AlienChangeListBrowser.java  ^     _ ; ` % a b c d e f g h i j k l m n o 'com/intellij/openapi/vcs/changes/Change p q r s 2 t u v w x y +com/intellij/openapi/vcs/changes/ChangeList < = :com/intellij/openapi/vcs/changes/ui/AlienChangeListBrowser >com/intellij/openapi/vcs/changes/ui/CommitDialogChangesBrowser +(Lcom/intellij/openapi/project/Project;ZZ)V init 	myProject 5com/intellij/openapi/vcs/changes/RemoteRevisionsCache getInstance _(Lcom/intellij/openapi/project/Project;)Lcom/intellij/openapi/vcs/changes/RemoteRevisionsCache; getChangesNodeDecorator G()Lcom/intellij/openapi/vcs/changes/ui/RemoteStatusChangeNodeDecorator; getGrouping D()Lcom/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicyFactory; 4com/intellij/openapi/vcs/changes/ui/TreeModelBuilder buildFromChanges �(Lcom/intellij/openapi/project/Project;Lcom/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicyFactory;Ljava/util/Collection;Lcom/intellij/openapi/vcs/changes/ui/ChangeNodeDecorator;)Ljavax/swing/tree/DefaultTreeModel; myViewer 1Lcom/intellij/openapi/vcs/changes/ui/ChangesTree; 4com/intellij/openapi/vcs/changes/ui/VcsTreeModelData selected K(Ljavax/swing/JTree;)Lcom/intellij/openapi/vcs/changes/ui/VcsTreeModelData; userObjects #(Ljava/lang/Class;)Ljava/util/List; java/util/Collections 	emptyList $com/intellij/openapi/vcs/VcsDataKeys CHANGE_LISTS +Lcom/intellij/openapi/actionSystem/DataKey; )com/intellij/openapi/actionSystem/DataKey is (Ljava/lang/String;)Z $$$reportNull$$$0 (I)V z {
  | Ccom/intellij/openapi/vcs/changes/ui/RemoteStatusChangeNodeDecorator ~ !javax/swing/tree/DefaultTreeModel � 0com/intellij/openapi/vcs/changes/LocalChangeList � java/util/List � >Argument for @NotNull parameter '%s' of %s.%s must not be null � *@NotNull method %s.%s must not return null � java/lang/Object � $ & ' \ + / 1 4 5 6 8 9  java/lang/String � format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; � �
 � � "java/lang/IllegalArgumentException � (Ljava/lang/String;)V  �
 � � java/lang/IllegalStateException �
 � � [Ljava/lang/Object; � java/lang/RuntimeException � !                                           �     .+� � },� � }-� � }*+� *,� *-� *� �    !   *    . " #     . $ %    . &     . '   (       . '             $  )  -  @         ) *                 + ,     t     $*� � � L*� *� *� +� 	Y� � }�    !       $ " #     - .      
    #  $ @    � #     �          / 0     C     *� Y� � }�    !        " #           + @    L �          1 2     C     *� Y� � }�    !        " #           2 @    L �     3          4 2     L     *� 
� � Y� � }�    !        " #           8 @    U �     3          5 2     D     *� Y� � }�    !        " #           > @    M �     3          6 2     C     � Y� � }�    !        " #           D @    L �     7          8 2     C     � Y� 	� }�    !        " #           J @    L �     7          9 2     C     � Y� 
� }�    !        " #           P @    L �     7          : ;     +      �    !        " #           U  < =     a     � +� � � Y*� S�*+� �    !        " #      > ?          [ 
 \  ^ @          A  
 z {    =    �     ;       
   ;   ;   ;   @   @   @   @   @   @   @   @�� �� �   9       
   9   9   9   =   =   =   =   =   =   =   =� � � ��      <       
   <   D   L   T   T   T   T   T   T   T   TY�S� Y�S� Y�S� Y�S� �     ;       
   ;   ;   ;   C   K   S   [   c   k   s   {Y�S� CY�S� ;Y�S� 3Y�S� +Y�S� #Y�S� Y�S� Y�S� Y�S� �     ;       
   ;   ;   ;   C   C   C   C   C   C   C   CY�S� � � ��   9       
   9   9   9   D   D   D   D   D   D   D   D� �Z_� �� � �Z_� �� �    @  $ <D �y �C ��    �� ?   � ��    � ��    � ��    � ��    � �� ;   � ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � �� ;   � ��    � ��    � �| �J �J �  B    CPK
    �J�L����  �  @   com/intellij/openapi/vcs/changes/ui/AlienLocalChangeList$1.class����   4 
     <init> %(Ljava/util/List;Ljava/lang/String;)V Code LineNumberTable LocalVariableTable this InnerClasses <Lcom/intellij/openapi/vcs/changes/ui/AlienLocalChangeList$1; changes Ljava/util/List; name Ljava/lang/String; LocalVariableTypeTable ;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>; 	isDefault ()Z 
SourceFile AlienLocalChangeList.java EnclosingMethod   :com/intellij/openapi/vcs/changes/ui/AlienLocalChangeList$1 8com/intellij/openapi/vcs/changes/ui/AlienLocalChangeList 0                W     *+,� �           Q          	                                  ,     �           S         	                 
   
       PK
    �J�L�zf*~  ~  >   com/intellij/openapi/vcs/changes/ui/AlienLocalChangeList.class����   4 r
  ?	  @	  A B	  C D
  ? E
 F G H
  I	  J K L InnerClasses 	myChanges Ljava/util/List; 	Signature ;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>; myName Ljava/lang/String; 	myComment DEFAULT_ALIEN :Lcom/intellij/openapi/vcs/changes/ui/AlienLocalChangeList; <init> %(Ljava/util/List;Ljava/lang/String;)V Code LineNumberTable LocalVariableTable this changes name LocalVariableTypeTable P(Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>;Ljava/lang/String;)V $RuntimeInvisibleParameterAnnotations #Lorg/jetbrains/annotations/NotNull; 
getChanges ()Ljava/util/Collection; C()Ljava/util/Collection<Lcom/intellij/openapi/vcs/changes/Change;>; getName ()Ljava/lang/String; RuntimeInvisibleAnnotations setName (Ljava/lang/String;)V 
getComment 
setComment comment 	isDefault ()Z 
isReadOnly setReadOnly (Z)V Z getData ()Ljava/lang/Object; $Lorg/jetbrains/annotations/Nullable; copy 4()Lcom/intellij/openapi/vcs/changes/LocalChangeList; <clinit> ()V 
SourceFile AlienLocalChangeList.java  <         'java/lang/UnsupportedOperationException :com/intellij/openapi/vcs/changes/ui/AlienLocalChangeList$1 M N O Default     8com/intellij/openapi/vcs/changes/ui/AlienLocalChangeList 0com/intellij/openapi/vcs/changes/LocalChangeList java/util/Collections 	emptyList ()Ljava/util/List; $$$reportNull$$$0 (I)V P Q
  R java/lang/String T >Argument for @NotNull parameter '%s' of %s.%s must not be null V *@NotNull method %s.%s must not return null X java/lang/Object Z    K (  + format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; b c
 U d "java/lang/IllegalArgumentException f  ,
 g h java/lang/IllegalStateException j
 k h [Ljava/lang/Object; m java/lang/RuntimeException o StackMapTable !                                      �     %+� � S,� � S*� *+� *,� *� �            %       %      %     !       %             !  "  # $ $ q         " #     $    $    % &     /     *� �                       '     '  ( )     C     *� Y� � S�                       , q    L U *     $    + ,     O     +� � S*+� �                          
   0  1 q     #     $    - )     /     *� �                       4  . ,     >     *+� �                   /      
    8  9  0 1     ,     �                       <  2 1     ,     �                       @  3 4     <     � Y� �                   2 5         D  6 7     2     � Y� �                       J *     8    9 :     2     � Y� �                       N  ; <     (      � Y� 	
� � �           Q
 P Q    �    '�                     $   W� Y� �                   !   � � � [�                     (   0   (Y\S� Y]S� Y^S� �                     '   Y^S� Y_S� �                     '   *Y`S� � YaS� � e�                   (   � gZ_� i� � kZ_� l� �    q   �  D U] UC U�    U� #   U n�    U n�    U n�    U n�    U n�    U n�    U n�    U n�    U n�    U n�    U n` UJ UJ p  =    >    
       PK
    �J�L�aT��  �  ^   com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion$getCachingRoot$1.class����   4 K Xcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion$getCachingRoot$1  �Lkotlin/jvm/internal/Lambda;Lkotlin/jvm/functions/Function1<Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>;Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>;>; kotlin/jvm/internal/Lambda  kotlin/jvm/functions/Function1  invoke &(Ljava/lang/Object;)Ljava/lang/Object; 6com/intellij/openapi/vcs/changes/ui/ChangesBrowserNode 
 r(Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;)Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;  
   #Lorg/jetbrains/annotations/NotNull; it  kotlin/jvm/internal/Intrinsics  checkParameterIsNotNull '(Ljava/lang/Object;Ljava/lang/String;)V  
   	getParent :()Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;  
   this ZLcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion$getCachingRoot$1; 8Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode; <init> ()V (I)V  !
  " INSTANCE <clinit> Lkotlin/Metadata; mv      	 bv        k    d1 9��

��

�� *002
0H
¢ d2 <anonymous> kotlin.jvm.PlatformType Gcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion 4 getCachingRoot �(Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;)Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode; 6 7   
  9 $ 	  ; =com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy = 	Companion BaseChangesGroupingPolicy.kt Code LineNumberTable LocalVariableTable 	Signature x(Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>;)Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>; $RuntimeInvisibleParameterAnnotations 
SourceFile EnclosingMethod InnerClasses RuntimeVisibleAnnotations 0       $    A  	  A   !     	*+� � �    B            A   ?     +� +� �    C                  B       D    E F              A        *� #�      %    A         � Y� :� <�      D     G    @ H    5 8 I           5 > ?  J   C  &  '[ I (I (I ) *[ I (I +I , -I . /[ s 0 1[ s 2s s 3s s PK
    �J�LZ�r�    M   com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion.class����   4 v Gcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion  java/lang/Object  getCachingRoot �(Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;)Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode; Lkotlin/jvm/JvmStatic; #Lorg/jetbrains/annotations/NotNull; $Lorg/jetbrains/annotations/Nullable; subtreeRoot 
 kotlin/jvm/internal/Intrinsics  checkParameterIsNotNull '(Ljava/lang/Object;Ljava/lang/String;)V  
   Xcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion$getCachingRoot$1  INSTANCE ZLcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion$getCachingRoot$1;  	   kotlin/jvm/functions/Function1  kotlin/sequences/SequencesKt  generateSequence O(Ljava/lang/Object;Lkotlin/jvm/functions/Function1;)Lkotlin/sequences/Sequence;  
   kotlin/sequences/Sequence   iterator ()Ljava/util/Iterator; " # ! $ java/util/Iterator & hasNext ()Z ( ) ' * next ()Ljava/lang/Object; , - ' . 6com/intellij/openapi/vcs/changes/ui/ChangesBrowserNode 0 4com/intellij/openapi/vcs/changes/ui/TreeModelBuilder 2 IS_CACHING_ROOT Lcom/intellij/openapi/util/Key; 4 5	 3 6 (com/intellij/openapi/util/UserDataHolder 8 com/intellij/openapi/util/Key : get >(Lcom/intellij/openapi/util/UserDataHolder;)Ljava/lang/Object; < =
 ; > java/lang/Boolean @ valueOf (Z)Ljava/lang/Boolean; B C
 A D areEqual '(Ljava/lang/Object;Ljava/lang/Object;)Z F G
  H it 8Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode; $i$a$2$find I this ILcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion; node <init> ()V Q R
  S 1(Lkotlin/jvm/internal/DefaultConstructorMarker;)V
  S $constructor_marker .Lkotlin/jvm/internal/DefaultConstructorMarker; Lkotlin/Metadata; mv      	 bv        k d1 Y��

��


��20B¢J&0202
0H¨ d2   intellij.platform.vcs.impl =com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy f 	Companion BaseChangesGroupingPolicy.kt Code LocalVariableTable LineNumberTable StackMapTable 	Signature �(Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>;Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>;)Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>; RuntimeVisibleAnnotations RuntimeInvisibleAnnotations $RuntimeInvisibleParameterAnnotations 
SourceFile SourceDebugExtension InnerClasses 1            j   �  	   e,� +� � � N-:� % :� + � 3� / :� 1:� 7� 9� ?� A� E� I� � ���� 1Y� � W,�    k   4  7  J K  7  L M    e N O     e P K    e 
 K  l       7  L  c  m   & �  ! ! '� 6  1� @ I 1A 1 n    o p        q        r     	        Q R  j   /     *� T�    k        N O   l        Q U  j   9     *� V�    k        N O      W X  l         s    i t   �SMAP
BaseChangesGroupingPolicy.kt
Kotlin
*S Kotlin
*F
+ 1 BaseChangesGroupingPolicy.kt
com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion
*L
1#1,21:1
*E
 u            g h  p   L  Y  Z[ I [I [I \ ][ I [I ^I _ `I [ a[ s b c[ s Os ds Rs s Ks Ps 
s ePK
    �J�L�Ӄ4�  �  X   com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$1.class����   4 H Rcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$1  �Lkotlin/jvm/internal/Lambda;Lkotlin/jvm/functions/Function1<Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;>; kotlin/jvm/internal/Lambda  kotlin/jvm/functions/Function1  invoke &(Ljava/lang/Object;)Ljava/lang/Object; 2com/intellij/openapi/vcs/changes/ui/StaticFilePath 
 j(Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;)Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;  
   $Lorg/jetbrains/annotations/Nullable; #Lorg/jetbrains/annotations/NotNull; it  kotlin/jvm/internal/Intrinsics  checkParameterIsNotNull '(Ljava/lang/Object;Ljava/lang/String;)V  
   	getParent 6()Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;  
   this TLcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$1; 4Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath; <init> ()V (I)V   "
  # INSTANCE <clinit> Lkotlin/Metadata; mv      	 bv        k    d1 '��

��

��020H
¢ d2 <anonymous> =com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy 4 resolveVirtualFile \(Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;)Lcom/intellij/openapi/vfs/VirtualFile; 6 7   !
  9 % 	  ; BaseChangesGroupingPolicy.kt Code LineNumberTable LocalVariableTable RuntimeInvisibleAnnotations $RuntimeInvisibleParameterAnnotations 	Signature 
SourceFile EnclosingMethod InnerClasses RuntimeVisibleAnnotations 0       %    A  	  >   !     	*+� � �    ?            >   ?     +� +� �    @                  ?       A        B            !  >        *� $�      & !  >         � Y� :� <�      C     D    = E    5 8 F   
        G   @  '  ([ I )I )I * +[ I )I ,I - .I / 0[ s 1 2[ s 3s s s PK
    �J�L�.�O  O  X   com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$2.class����   4 H Rcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$2  �Lkotlin/jvm/internal/Lambda;Lkotlin/jvm/functions/Function1<Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;Lcom/intellij/openapi/vfs/VirtualFile;>; kotlin/jvm/internal/Lambda  kotlin/jvm/functions/Function1  invoke &(Ljava/lang/Object;)Ljava/lang/Object; 2com/intellij/openapi/vcs/changes/ui/StaticFilePath 
 \(Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;)Lcom/intellij/openapi/vfs/VirtualFile;  
   $Lorg/jetbrains/annotations/Nullable; #Lorg/jetbrains/annotations/NotNull; it  kotlin/jvm/internal/Intrinsics  checkParameterIsNotNull '(Ljava/lang/Object;Ljava/lang/String;)V  
   resolve (()Lcom/intellij/openapi/vfs/VirtualFile;  
   this TLcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$2; 4Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath; <init> ()V (I)V   "
  # INSTANCE <clinit> Lkotlin/Metadata; mv      	 bv        k    d1 -��
��

��

����020H
¢ d2 <anonymous> &Lcom/intellij/openapi/vfs/VirtualFile; =com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy 5 resolveVirtualFile 7    !
  9 % 	  ; BaseChangesGroupingPolicy.kt Code LineNumberTable LocalVariableTable RuntimeInvisibleAnnotations $RuntimeInvisibleParameterAnnotations 	Signature 
SourceFile EnclosingMethod InnerClasses RuntimeVisibleAnnotations 0       %    A  	  >   !     	*+� � �    ?            >   ?     +� +� �    @                  ?       A        B            !  >        *� $�      & !  >         � Y� :� <�      C     D    = E    6 8 F   
        G   C  '  ([ I )I )I * +[ I )I ,I - .I / 0[ s 1 2[ s 3s 4s s s PK
    �J�L8��چ  �  C   com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy.class����   4 m =com/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy  java/lang/Object  9com/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicy  
nextPolicy ;Lcom/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicy; $Lorg/jetbrains/annotations/Nullable; getNextPolicy =()Lcom/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicy;  	   this ?Lcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy; setNextPolicy >(Lcom/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicy;)V <set-?> setNextGroupingPolicy policy resolveVirtualFile \(Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath;)Lcom/intellij/openapi/vfs/VirtualFile; #Lorg/jetbrains/annotations/NotNull; nodePath  kotlin/jvm/internal/Intrinsics  checkParameterIsNotNull '(Ljava/lang/Object;Ljava/lang/String;)V  
   Rcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$1   INSTANCE TLcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$1; " #	 ! $ kotlin/jvm/functions/Function1 & kotlin/sequences/SequencesKt ( generateSequence O(Ljava/lang/Object;Lkotlin/jvm/functions/Function1;)Lkotlin/sequences/Sequence; * +
 ) , Rcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$2 . TLcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$resolveVirtualFile$2; " 0	 / 1 
mapNotNull X(Lkotlin/sequences/Sequence;Lkotlin/jvm/functions/Function1;)Lkotlin/sequences/Sequence; 3 4
 ) 5 firstOrNull /(Lkotlin/sequences/Sequence;)Ljava/lang/Object; 7 8
 ) 9 $com/intellij/openapi/vfs/VirtualFile ; 4Lcom/intellij/openapi/vcs/changes/ui/StaticFilePath; <init> ()V > ?
  @ <clinit> 	Companion ILcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion; Lkotlin/Metadata; mv      	 bv        k d1 ��� 




��

��

&�� 20:B¢J0	2
0HJ020HR0X¢
��"¨ d2 &Lcom/intellij/openapi/vfs/VirtualFile;   intellij.platform.vcs.impl getCachingRoot �(Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode;)Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode; Lkotlin/jvm/JvmStatic; C D	  V Gcom/intellij/openapi/vcs/changes/ui/BaseChangesGroupingPolicy$Companion X S T
 Y Z node 8Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode; subtreeRoot 1(Lkotlin/jvm/internal/DefaultConstructorMarker;)V > _
 Y ` BaseChangesGroupingPolicy.kt RuntimeInvisibleAnnotations Code LocalVariableTable LineNumberTable $RuntimeInvisibleParameterAnnotations 	Signature �(Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>;Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>;)Lcom/intellij/openapi/vcs/changes/ui/ChangesBrowserNode<*>; RuntimeVisibleAnnotations 
SourceFile InnerClasses!          c     	    C D     
   d   /     *� �    e            f        c     	       d   :     *+� �    e                  f        g     	       d   >     *+� �    e                  f   
    
   g     	       d   T      +� +� %� '� -� 2� '� 6� :� <�    e                  =  f       c     	   g         > ?  d   /     *� A�    e            f         B ?  d         � YY� a� W�      S T  d   1     	� W*+� [�    e       	 \ ]     	 ^ ]  h    i j     U   c        g     	        k    b l     !      /      Y  C  j   g  E  F[ I GI GI H I[ I GI JI K LI G M[ s N O[ s s s ?s s 
s s s s s Ps s =s s Qs s Cs RPK
    �J�Ll��	  	  B   com/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$1.class����   4 �	  V	  W
  X Y
  Z
 T [ \ ] \ ^ _ 	 ` 	 a 	 b c
  d
  e
  f g
  h
  i j k l m l n
  o
  p
  q r s t u v val$onSelected Lcom/intellij/util/Consumer; this$0 <Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain; <init> �(Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain;Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain;Ljava/lang/Object;Lcom/intellij/util/Consumer;)V Code LineNumberTable LocalVariableTable this InnerClasses >Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$1; chain defaultSelection Ljava/lang/Object; buildTreeModel �(Lcom/intellij/openapi/project/Project;Lcom/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicyFactory;)Ljavax/swing/tree/DefaultTreeModel; producer Producer ELcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer; filePath #Lcom/intellij/openapi/vcs/FilePath; 
fileStatus %Lcom/intellij/openapi/vcs/FileStatus; tag i I project &Lcom/intellij/openapi/project/Project; grouping BLcom/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicyFactory; groups 'Lcom/intellij/util/containers/MultiMap; builder 6Lcom/intellij/openapi/vcs/changes/ui/TreeModelBuilder; LocalVariableTypeTable GenericNodeData �Lcom/intellij/util/containers/MultiMap<Ljava/lang/Object;Lcom/intellij/openapi/vcs/changes/ui/TreeModelBuilder$GenericNodeData;>; StackMapTable Y g w RuntimeInvisibleAnnotations #Lorg/jetbrains/annotations/NotNull; $RuntimeInvisibleParameterAnnotations 
onSelected (Ljava/lang/Object;)V object $Lorg/jetbrains/annotations/Nullable; 	Signature �Lcom/intellij/openapi/vcs/changes/actions/diff/ChangeGoToChangePopupAction<Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain;>; 
SourceFile ChangeDiffRequestChain.java EnclosingMethod x y z   !   " { %com/intellij/util/containers/MultiMap " | } ~  � � � � Ccom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer � � � � � � Dcom/intellij/openapi/vcs/changes/ui/TreeModelBuilder$GenericNodeData � � " � � � 4com/intellij/openapi/vcs/changes/ui/TreeModelBuilder " � � � � � � w � � � � � � � � � � java/lang/Integer � � L <com/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$1 Icom/intellij/openapi/vcs/changes/actions/diff/ChangeGoToChangePopupAction java/util/Iterator :com/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain createGoToChangeAction J(Lcom/intellij/util/Consumer;)Lcom/intellij/openapi/actionSystem/AnAction; @(Lcom/intellij/diff/chains/DiffRequestChain;Ljava/lang/Object;)V ()V 
access$000 N(Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain;)Ljava/util/List; java/util/List size ()I get (I)Ljava/lang/Object; getFilePath %()Lcom/intellij/openapi/vcs/FilePath; getFileStatus '()Lcom/intellij/openapi/vcs/FileStatus; getPopupTag ()Ljava/lang/Object; valueOf (I)Ljava/lang/Integer; ](Lcom/intellij/openapi/vcs/FilePath;Lcom/intellij/openapi/vcs/FileStatus;Ljava/lang/Object;)V putValue '(Ljava/lang/Object;Ljava/lang/Object;)V k(Lcom/intellij/openapi/project/Project;Lcom/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicyFactory;)V keySet ()Ljava/util/Set; java/util/Set iterator ()Ljava/util/Iterator; hasNext ()Z next *(Ljava/lang/Object;)Ljava/util/Collection; setGenericNodes +(Ljava/util/Collection;Ljava/lang/Object;)V build %()Ljavax/swing/tree/DefaultTreeModel; com/intellij/util/Consumer consume $$$reportNull$$$0 (I)V � �
  � $com/intellij/openapi/project/Project � @com/intellij/openapi/vcs/changes/ui/ChangesGroupingPolicyFactory � !javax/swing/tree/DefaultTreeModel � >Argument for @NotNull parameter '%s' of %s.%s must not be null � *@NotNull method %s.%s must not return null � java/lang/Object � 9 ; u - java/lang/String � format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; � �
 � � "java/lang/IllegalArgumentException � (Ljava/lang/String;)V " �
 � � java/lang/IllegalStateException �
 � � [Ljava/lang/Object; � java/lang/RuntimeException �              !      " #  $   Z     *+� *� *,-� �    &   *     ' )        !     * !     + ,  %       -  - .  $  �  	   �+� � �,� � �� Y� N6*� � �  � M*� � �  � 	:� 
 :�  :�  :-� Y� � � ����� Y+,� :-� �  :�  � �  :-� � ���� Y� � ��    &   p  ? 1 / 1  H ( 2 3  Q  4 5  Z  6 ,   [ 7 8  �  6 ,    � ' )     � 9 :    � ; <   � = >  � < ? @  A      � = C  %   6   1  2 , 3 ? 4 H 5 Q 6 Z 7 p 2 v : � ; � < � = � > D   , � 
 � Z�    � �   G  "L � H     I   J     I    I    K L  $   F     *� +� �  �    &        ' )      M ,  %   
    C  D J     N  
 � �  $  �    �                      �� �� �                   � � � ��                   $   ,Y�S� Y�S� Y�S� �                     #Y�S� Y�S� �                     #Y�S� � � ��                   $� �Z_� �� � �Z_� �� �    D   � D �Y �C ��    ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � �\ �J �J �  O    P Q    R (            	 T 0	  F B 	PK
    �J�L���3  3  I   com/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer.class����   4     getFilePath %()Lcom/intellij/openapi/vcs/FilePath; RuntimeInvisibleAnnotations #Lorg/jetbrains/annotations/NotNull; getFileStatus '()Lcom/intellij/openapi/vcs/FileStatus; getPopupTag ()Ljava/lang/Object; Code LineNumberTable LocalVariableTable this Producer InnerClasses ELcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer; $Lorg/jetbrains/annotations/Nullable; 
SourceFile ChangeDiffRequestChain.java  Ccom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer java/lang/Object ,com/intellij/diff/chains/DiffRequestProducer :com/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain                    	           
      ,     �           R                              
    	PK
    �J�L�%�D      @   com/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain.class����   4 �	  <
  =   C
 D E
 D F	  G H
 I J K
  L
 M N
 	 O P
 I Q R T V Producer InnerClasses LOG (Lcom/intellij/openapi/diagnostic/Logger; myProducers Ljava/util/List; 	Signature XLjava/util/List<+Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer;>; RuntimeInvisibleAnnotations #Lorg/jetbrains/annotations/NotNull; <init> (Ljava/util/List;I)V Code LineNumberTable LocalVariableTable this <Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain; 	producers index I LocalVariableTypeTable StackMapTable P W \(Ljava/util/List<+Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer;>;I)V $RuntimeInvisibleParameterAnnotations getRequests ()Ljava/util/List; Z()Ljava/util/List<+Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer;>; createGoToChangeAction J(Lcom/intellij/util/Consumer;)Lcom/intellij/openapi/actionSystem/AnAction; 
onSelected Lcom/intellij/util/Consumer; 1Lcom/intellij/util/Consumer<Ljava/lang/Integer;>; _(Lcom/intellij/util/Consumer<Ljava/lang/Integer;>;)Lcom/intellij/openapi/actionSystem/AnAction; 
access$000 N(Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain;)Ljava/util/List; x0 <clinit> ()V 
SourceFile ChangeDiffRequestChain.java    X BootstrapMethods Y Z [ \ ] ^ _ ` a b c   Producers must not be null d e f <com/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$1 g h i j k  l :com/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain m n -com/intellij/diff/chains/DiffRequestChainBase o ;com/intellij/diff/actions/impl/GoToChangePopupBuilder$Chain Chain Ccom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer java/util/List (I)V
 p q (Ljava/lang/Object;)Z
 r s H(Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain$Producer;)Z value '()Lcom/intellij/openapi/util/Condition; *com/intellij/util/containers/ContainerUtil exists <(Ljava/lang/Iterable;Lcom/intellij/openapi/util/Condition;)Z 	skipNulls ((Ljava/util/Collection;)Ljava/util/List; &com/intellij/openapi/diagnostic/Logger error (Ljava/lang/String;)V getIndex ()I java/lang/Integer valueOf (I)Ljava/lang/Integer; �(Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain;Lcom/intellij/openapi/vcs/changes/ui/ChangeDiffRequestChain;Ljava/lang/Object;Lcom/intellij/util/Consumer;)V getInstance ;(Ljava/lang/Class;)Lcom/intellij/openapi/diagnostic/Logger; 5com/intellij/diff/actions/impl/GoToChangePopupBuilder t u x y z Z "java/lang/invoke/LambdaMetafactory metafactory | Lookup �(Ljava/lang/invoke/MethodHandles$Lookup;Ljava/lang/String;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodHandle;Ljava/lang/invoke/MethodType;)Ljava/lang/invoke/CallSite; java/util/Objects isNull } %java/lang/invoke/MethodHandles$Lookup java/lang/invoke/MethodHandles $$$reportNull$$$0 ~ X
 (  >Argument for @NotNull parameter '%s' of %s.%s must not be null � *@NotNull method %s.%s must not return null � java/lang/Object � # P 1 , /  java/lang/String � format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; � �
 � � "java/lang/IllegalArgumentException �  f
 � � java/lang/IllegalStateException �
 � � [Ljava/lang/Object; � java/lang/RuntimeException � ! (                                   �     ,+� � �*� +�   � � +� L� � *+� �             , ! "     , #     , $ %  &       , #                & ! + " '    �    )       * +   	        , -     C     *� Y� � ��             ! "          ' '    L )     .          / 0     u     "+� � �� 	Y***� 
� +� Y� � ��            " ! "     " 1 2  &       " 1 3        - '    X 	     4         +        5 6     /     *� �             7 "            8 9     !      	� � �           
 ~ X        /�                  $      $�� �� �                !      !� � � ��                     (   0   (Y�S� Y�S� Y�S� �                  '      /Y�S� Y�S� Y�S� �                  '   *   'Y�S� � Y�S� � ��                (      (� �Z_� �� � �Z_� �� �    '   �  D �] �C ��    �� #   � ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � ��    � �` �J �J �  >     ?  @ A B :    ;    "   ( 	 	        S U	 v { w PK
    �J�L�尭�  �  >   com/intellij/openapi/vcs/changes/ui/ChangeInfoCalculator.class����   4 �
  Z
 [ \	  ]	  ^	  _	  `
  a	  b
  c	  d	  e f g h i h j k l
 m n	 o p	 o q	 o r	 o s   y  y  y | }  myDisplayedChanges Ljava/util/List; 	Signature ;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>; RuntimeInvisibleAnnotations #Lorg/jetbrains/annotations/NotNull; myIncludedChanges myUnversionedFilesCount I myIncludedUnversionedFilesCount MODIFIED_FILTER Lcom/intellij/util/Processor; HLcom/intellij/util/Processor<Lcom/intellij/openapi/vcs/changes/Change;>; 
NEW_FILTER DELETED_FILTER <init> ()V Code LineNumberTable LocalVariableTable this :Lcom/intellij/openapi/vcs/changes/ui/ChangeInfoCalculator; update #(Ljava/util/List;Ljava/util/List;)V displayedChanges includedChanges LocalVariableTypeTable y(Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>;)V $RuntimeInvisibleParameterAnnotations %(Ljava/util/List;Ljava/util/List;II)V unversionedFilesCount includedUnversionedFilesCount {(Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>;Ljava/util/List<Lcom/intellij/openapi/vcs/changes/Change;>;II)V getNew ()I getModified 
getDeleted getUnversioned getIncludedNew getIncludedModified getIncludedDeleted getIncludedUnversioned countMatchingItems 0(Ljava/util/List;Lcom/intellij/util/Processor;)I item Ljava/lang/Object; items filter count TT; Ljava/util/List<TT;>; "Lcom/intellij/util/Processor<TT;>; StackMapTable � P<T:Ljava/lang/Object;>(Ljava/util/List<TT;>;Lcom/intellij/util/Processor<TT;>;)I lambda$static$2 ,(Lcom/intellij/openapi/vcs/changes/Change;)Z )Lcom/intellij/openapi/vcs/changes/Change; lambda$static$1 lambda$static$0 <clinit> 
SourceFile ChangeInfoCalculator.java * + � � �   !  " # $ # 1 8 ( & E F % & ) & � � � � � � � � � � � � � � � � � � � � � � � BootstrapMethods � � � S � � � � 8com/intellij/openapi/vcs/changes/ui/ChangeInfoCalculator java/lang/Object � Dcom/intellij/openapi/vcs/changes/ui/CommitLegendPanel$InfoCalculator InfoCalculator InnerClasses java/util/Iterator java/util/Collections 	emptyList ()Ljava/util/List; java/util/List iterator ()Ljava/util/Iterator; hasNext ()Z next ()Ljava/lang/Object; com/intellij/util/Processor process (Ljava/lang/Object;)Z 'com/intellij/openapi/vcs/changes/Change getType Type 0()Lcom/intellij/openapi/vcs/changes/Change$Type; ,com/intellij/openapi/vcs/changes/Change$Type DELETED .Lcom/intellij/openapi/vcs/changes/Change$Type; NEW MODIFICATION MOVED
 � �
  � ()Lcom/intellij/util/Processor;
  �
  � 5com/intellij/openapi/vcs/changes/ui/CommitLegendPanel � � � V S U S R S "java/lang/invoke/LambdaMetafactory metafactory � Lookup �(Ljava/lang/invoke/MethodHandles$Lookup;Ljava/lang/String;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodHandle;Ljava/lang/invoke/MethodType;)Ljava/lang/invoke/CallSite; � %java/lang/invoke/MethodHandles$Lookup java/lang/invoke/MethodHandles $$$reportNull$$$0 (I)V � �
  � >Argument for @NotNull parameter '%s' of %s.%s must not be null � 3 4 I J | 1 E java/lang/String � format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; � �
 � � "java/lang/IllegalArgumentException � (Ljava/lang/String;)V * �
 � � [Ljava/lang/Object; � !                         !                  " #    $ #    % &      '  ( &      '  ) &      '   * +  ,   [     *� *� � *� � *� *� �    .        / 0   -            !  "  #  $  1 2  ,   �     +� � �,� � �*+,� �    .         / 0      3      4   5        3      4   -   
   '  ( O         6 7               1 8  ,   �     &+� � �,� � �*+� *,� *� *� �    .   4    & / 0     & 3     & 4     & 9 #    & : #  5       & 3     & 4   -      .  /  0  1 % 2 O         ; 7                   < =  ,   5     *� � � 	�    .        / 0   -       5  > =  ,   5     *� � 
� 	�    .        / 0   -       9  ? =  ,   5     *� � � 	�    .        / 0   -       =  @ =  ,   /     *� �    .        / 0   -       B  A =  ,   5     *� � � 	�    .        / 0   -       F  B =  ,   5     *� � 
� 	�    .        / 0   -       J  C =  ,   5     *� � � 	�    .        / 0   -       N  D =  ,   /     *� �    .        / 0   -       S 
 E F  ,   �     =*� � �+� � �=*�  N-�  � -�  :+�  � �����    .   *  *  G H    = I      = J &   + K #  5      *  G L    = I M     = J N  -      \  ^ * _ 8 ` ; b O    �  P�  �      Q 7             
 R S  ,   E     *� � � � �    .        G T   -       Y O    @
 U S  ,   E     *� � � � �    .        G T   -       X O    @
 V S  ,   P     *� � � *� � � � �    .        G T   -       W O    @  W +  ,   9      �   � 
�   � �   � �    -       V  X  Y
 � �  ,       ��� �   %          %   -   %   -   5   =Y�S� Y�S� Y�S� Y�S� Y�S�    &          &   &   &   &   .   .Y�S� Y�S� � �� �Z_� Ŀ    O   r � ,   � ��    � ��    � ��    � ��    � �� +   � ��    � ��    � �  t      u  v w x u  v z x u  v { x X    Y �      ~ �	 o m �@ � � � PK
    �J�Lok�N�  �  =   com/intellij/openapi/vcs/changes/ui/ChangeListChooser$1.class����   4 :	  '
 	 (
 % )
 % *
 % + ,
  - . / 0 this$0 7Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser; <init> :(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser;)V Code LineNumberTable LocalVariableTable this InnerClasses 9Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser$1; consume (Ljava/lang/String;)V errorMessage Ljava/lang/String; StackMapTable 1 . , $RuntimeInvisibleParameterAnnotations $Lorg/jetbrains/annotations/Nullable; (Ljava/lang/Object;)V 	Signature JLjava/lang/Object;Lcom/intellij/util/NullableConsumer<Ljava/lang/String;>; 
SourceFile ChangeListChooser.java EnclosingMethod 1  2    3 4 5 6 7 8 9 java/lang/String   7com/intellij/openapi/vcs/changes/ui/ChangeListChooser$1 java/lang/Object "com/intellij/util/NullableConsumer 5com/intellij/openapi/vcs/changes/ui/ChangeListChooser �(Lcom/intellij/openapi/project/Project;Ljava/util/Collection;Lcom/intellij/openapi/vcs/changes/ChangeList;Ljava/lang/String;Ljava/lang/String;)V ()V setOKActionEnabled (Z)V 
access$000 u(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser;)Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; 
access$100 d(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser;Ljava/lang/String;Ljavax/swing/JComponent;)V    	  
               >     
*+� *� �           -        
       
           y      *� +� � � *� +*� � � �           0  1  2                         L �               A       3     	*+� � �           -        	                   ! "    # $    % &    
        PK
    �J�Lȓ�zn  n  ;   com/intellij/openapi/vcs/changes/ui/ChangeListChooser.class����   4 �
  O	  P
  Q	  R S T
  U
  V
  W
  X
  Y
  Z
  [
  W
  \ ] ^
  _	  `
  a b c InnerClasses 	myProject &Lcom/intellij/openapi/project/Project; mySelectedList 2Lcom/intellij/openapi/vcs/changes/LocalChangeList; myPanel <Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; <init> �(Lcom/intellij/openapi/project/Project;Ljava/util/Collection;Lcom/intellij/openapi/vcs/changes/ChangeList;Ljava/lang/String;Ljava/lang/String;)V Code LineNumberTable LocalVariableTable this 7Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser; project changelists Ljava/util/Collection; defaultSelection -Lcom/intellij/openapi/vcs/changes/ChangeList; title Ljava/lang/String; suggestedName LocalVariableTypeTable FLjava/util/Collection<+Lcom/intellij/openapi/vcs/changes/ChangeList;>; StackMapTable b d e f g 	Signature �(Lcom/intellij/openapi/project/Project;Ljava/util/Collection<+Lcom/intellij/openapi/vcs/changes/ChangeList;>;Lcom/intellij/openapi/vcs/changes/ChangeList;Ljava/lang/String;Ljava/lang/String;)V $RuntimeInvisibleParameterAnnotations #Lorg/jetbrains/annotations/NotNull; $Lorg/jetbrains/annotations/Nullable; getPreferredFocusedComponent ()Ljavax/swing/JComponent; 	getHelpId ()Ljava/lang/String; RuntimeInvisibleAnnotations getDimensionServiceKey 
doOKAction ()V getSelectedList 4()Lcom/intellij/openapi/vcs/changes/LocalChangeList; createCenterPanel 
access$000 u(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser;)Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; x0 
access$100 d(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser;Ljava/lang/String;Ljavax/swing/JComponent;)V x1 x2 Ljavax/swing/JComponent; 
SourceFile ChangeListChooser.java h i    j   :com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel 7com/intellij/openapi/vcs/changes/ui/ChangeListChooser$1  k  l m A n o p q r s t s : ; (reference.dialogs.vcs.changelist.chooser VCS.ChangelistChooser B u   @ A 5com/intellij/openapi/vcs/changes/ui/ChangeListChooser %com/intellij/openapi/ui/DialogWrapper $com/intellij/openapi/project/Project java/util/Collection +com/intellij/openapi/vcs/changes/ChangeList java/lang/String setErrorText -(Ljava/lang/String;Ljavax/swing/JComponent;)V *(Lcom/intellij/openapi/project/Project;Z)V :(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooser;)V M(Lcom/intellij/openapi/project/Project;Lcom/intellij/util/NullableConsumer;)V init setChangeLists (Ljava/util/Collection;)V setDefaultSelection 0(Lcom/intellij/openapi/vcs/changes/ChangeList;)V setTitle (Ljava/lang/String;)V setSuggestedName Z(Lcom/intellij/openapi/project/Project;)Lcom/intellij/openapi/vcs/changes/LocalChangeList; $$$reportNull$$$0 (I)V v w
 0 x >Argument for @NotNull parameter '%s' of %s.%s must not be null z java/lang/Object | % & b  format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; � �
 4 � "java/lang/IllegalArgumentException �  s
 � � [Ljava/lang/Object; � ! 0                    
             b+� � y,� � y*+� *+� *� Y*� � Y*� � � *� � 	*� ,� 
*� -� *� � *� � *� �    "   >    b # $     b %     b & '    b ( )    b * +    b , +  -       b & .  !   .   *  +  - 2 5 9 6 A 7 I 9 O : T ; ] > a ? /    � L   1 2 3 4 4   5    6 7     8    8    9      9    : ;      2     *� � �    "        # $   !       B  < =      -     �    "        # $   !       H >     9    ? =      -     �    "        # $   !       L  @ A      Z     **� *� � � *� � *� �    "        # $   !       P  Q  R  T /      B C      /     *� �    "        # $   !       X >     9    D ;      /     *� �    "        # $   !       \ E F      /     *� �    "        G $   !         H I      E     *+,� �    "         G $      J +     K L  !        
 v w      �     B{� }�                Y~S� YS� Y�SY�S� �� �Z_� ��    /   , �    4 ��    4 ��    4 �  M    N    
        PK
    �J�Lt9;�N  N  B   com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$1.class����   4 � J	  L
  M  N
  O	 P Q
 R S
 R T
 U V W
 X Y
 Z [ \
  M
  ]
  ^ _
  `	 a b	 a c
  d e
  f g h this$0 <Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; <init> ?(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)V Code LineNumberTable LocalVariableTable this InnerClasses >Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$1; customizeCellRenderer F(Ljavax/swing/JList;Lcom/intellij/openapi/vcs/changes/ChangeList;IZZ)V 	truncated Ljava/lang/String; name visibleWidth I fm Ljava/awt/FontMetrics; width list Ljavax/swing/JList; value -Lcom/intellij/openapi/vcs/changes/ChangeList; index selected Z hasFocus LocalVariableTypeTable CLjavax/swing/JList<+Lcom/intellij/openapi/vcs/changes/ChangeList;>; StackMapTable i j g k e l 	Signature v(Ljavax/swing/JList<+Lcom/intellij/openapi/vcs/changes/ChangeList;>;Lcom/intellij/openapi/vcs/changes/ChangeList;IZZ)V $RuntimeInvisibleParameterAnnotations #Lorg/jetbrains/annotations/NotNull; +(Ljavax/swing/JList;Ljava/lang/Object;IZZ)V XLcom/intellij/ui/ColoredListCellRenderer<Lcom/intellij/openapi/vcs/changes/ChangeList;>; 
SourceFile ChangeListChooserPanel.java EnclosingMethod m  n Kcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox MyEditorComboBox    o p q r s t - * k u v w x j y z  .. { | } i ~  java/lang/StringBuilder � � � q 0com/intellij/openapi/vcs/changes/LocalChangeList � � l � � � � � � +com/intellij/openapi/vcs/changes/ChangeList $ % <com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$1 'com/intellij/ui/ColoredListCellRenderer java/lang/String java/awt/FontMetrics javax/swing/JList $com/intellij/ui/SimpleTextAttributes :com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel M(Lcom/intellij/openapi/project/Project;Lcom/intellij/util/NullableConsumer;)V ()V getName ()Ljava/lang/String; getSize ()Ljava/awt/Dimension; java/awt/Dimension getFont ()Ljava/awt/Font; getFontMetrics '(Ljava/awt/Font;)Ljava/awt/FontMetrics; stringWidth (Ljava/lang/String;)I Fcom/intellij/openapi/vcs/changes/committed/CommittedChangeListRenderer truncateDescription =(Ljava/lang/String;Ljava/awt/FontMetrics;I)Ljava/lang/String; length ()I append -(Ljava/lang/String;)Ljava/lang/StringBuilder; toString 	isDefault ()Z REGULAR_BOLD_ATTRIBUTES &Lcom/intellij/ui/SimpleTextAttributes; REGULAR_ATTRIBUTES ;(Ljava/lang/String;Lcom/intellij/ui/SimpleTextAttributes;)V $$$reportNull$$$0 (I)V � �
  � >Argument for @NotNull parameter '%s' of %s.%s must not be null � java/lang/Object � . g $ format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; � �
 9 � "java/lang/IllegalArgumentException � (Ljava/lang/String;)V  �
 � �   ;                  >     
*+� *� �            
 ! #     
           :  $ %    �     �+� � �,� �,�  :*� � 6�  �6++� � :� 	6		� 8
� 	dd� :

� � � Y� 
� 
� � :*,� � ,� � � 	� � � � �        p  W  & ' 
  � ( '   y ) *  1 e + ,  : \ - * 	   � ! #     � . /    � 0 1    � 2 *    � 3 4    � 5 4  6       � . 7     :   B  C  D  E " F ' H 1 I : J A K K L W M ` N v Q � U 8   i �  9� N :�  
  <  9 :   9�  
  <  9 :   9 >�    <    ?    @ A     B          D $ C     9     *+,� � �             ! #          : A     B          
 � �     -     !�� �Y�SY�SY�S� �� �Z_� ��      ?    D E    F "     ;        H K PK
    �J�L��2��  �  D   com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2$1.class����   4 N	  
  	 	 
   !
 " # $ & this$1 ( InnerClasses >Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2; <init> U(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2;Ljava/awt/Component;)V Code LineNumberTable LocalVariableTable this @Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2$1; 	component Ljava/awt/Component; getEditorTextField #()Lcom/intellij/ui/EditorTextField; RuntimeInvisibleAnnotations #Lorg/jetbrains/annotations/NotNull; 
SourceFile ChangeListChooserPanel.java EnclosingMethod ) *    + , - . / 1 2 3 4 >com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2$1 5 Xcom/intellij/openapi/vcs/changes/ui/NewEditChangelistPanel$ComponentWithTextFieldWrapper ComponentWithTextFieldWrapper <com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2 createComponentWithTextField �(Lcom/intellij/openapi/project/Project;)Lcom/intellij/openapi/vcs/changes/ui/NewEditChangelistPanel$ComponentWithTextFieldWrapper; (Ljava/awt/Component;)V this$0 <Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; :com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel 
access$000 MyEditorComboBox �(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox; Kcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox 
access$100 p(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox;)Lcom/intellij/ui/EditorTextField; :com/intellij/openapi/vcs/changes/ui/NewEditChangelistPanel $$$reportNull$$$0 (I)V 6 7
  8 com/intellij/ui/EditorTextField : *@NotNull method %s.%s must not return null < java/lang/Object > $  java/lang/String B format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; D E
 C F java/lang/IllegalStateException H (Ljava/lang/String;)V  J
 I K StackMapTable                     I     *+� *,� �                                    [        L     *� � � � Y� � 9�                       _ M    U ;        
 6 7     (     =� ?Y@SYAS� G� IZ_� L�           
   "  	               % ' "   0 PK
    �J�L��	�  �  D   com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2$2.class����   4 >	 
  
  !
  "	  #
 $ %
 & '
 $ (
 & )
 $ * + , this$1 - InnerClasses >Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2; <init> A(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2;)V Code LineNumberTable LocalVariableTable this @Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2$2; 	focusLost (Ljava/awt/event/FocusEvent;)V e Ljava/awt/event/FocusEvent; StackMapTable 
SourceFile ChangeListChooserPanel.java EnclosingMethod . /    0   1 2 3 4 5 6 7 8 9 : ; 8 < = >com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2$2 java/awt/event/FocusAdapter <com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2 init 5(Lcom/intellij/openapi/vcs/changes/LocalChangeList;)V ()V this$0 <Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; :com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel 
access$300 z(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)Lcom/intellij/openapi/vcs/changes/ui/NewEditChangelistPanel; :com/intellij/openapi/vcs/changes/ui/NewEditChangelistPanel getChangeListName ()Ljava/lang/String; 
access$400 �(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;Ljava/lang/String;)Lcom/intellij/openapi/vcs/changes/LocalChangeList; getDescription 
access$502 b(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;Ljava/lang/String;)Ljava/lang/String;   
                  >     
*+� *� �           o        
       
           �     8*+� *� � *� � � � � � *� � *� � � � � 	W�           r  s  t 7 v        8       8        7                         
      PK
    �J�L:�D�<  <  B   com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2.class����   4 �	  >
  ? @
 < A
  B
 C D   I
 J K L M
 < N O P
  Q	  R S
  T
 U V
  W
 X Y Z
  [
 < \ ] ^ InnerClasses this$0 <Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; <init> e(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;Lcom/intellij/openapi/project/Project;)V Code LineNumberTable LocalVariableTable this >Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2; project &Lcom/intellij/openapi/project/Project; createComponentWithTextField _ ComponentWithTextFieldWrapper �(Lcom/intellij/openapi/project/Project;)Lcom/intellij/openapi/vcs/changes/ui/NewEditChangelistPanel$ComponentWithTextFieldWrapper; nameChanged (Ljava/lang/String;)V errorMessage Ljava/lang/String; init 5(Lcom/intellij/openapi/vcs/changes/LocalChangeList;)V initial 2Lcom/intellij/openapi/vcs/changes/LocalChangeList; nameChangedImpl [(Lcom/intellij/openapi/project/Project;Lcom/intellij/openapi/vcs/changes/LocalChangeList;)V StackMapTable ] ` a b lambda$nameChanged$0 ()V 
SourceFile ChangeListChooserPanel.java EnclosingMethod c  d    e >com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2$1 f i  j k l m BootstrapMethods n 8 o p q r s t u v w x y z { | , - } ~ >com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2$2   � � � � � � � � -Cannot create new changelist with empty name. ( ) � � <com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2 :com/intellij/openapi/vcs/changes/ui/NewEditChangelistPanel Xcom/intellij/openapi/vcs/changes/ui/NewEditChangelistPanel$ComponentWithTextFieldWrapper $com/intellij/openapi/project/Project 0com/intellij/openapi/vcs/changes/LocalChangeList java/lang/String :com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel M(Lcom/intellij/openapi/project/Project;Lcom/intellij/util/NullableConsumer;)V )(Lcom/intellij/openapi/project/Project;)V 
access$000 � MyEditorComboBox �(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox; U(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2;Ljava/awt/Component;)V 3com/intellij/openapi/application/ApplicationManager getApplication 0()Lcom/intellij/openapi/application/Application;
 � �
  � run T(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2;)Ljava/lang/Runnable; .com/intellij/openapi/application/ModalityState current 2()Lcom/intellij/openapi/application/ModalityState; ,com/intellij/openapi/application/Application invokeLater G(Ljava/lang/Runnable;Lcom/intellij/openapi/application/ModalityState;)V 
access$200 b(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)Lcom/intellij/util/NullableConsumer; "com/intellij/util/NullableConsumer consume (Ljava/lang/Object;)V myDescriptionTextArea !Lcom/intellij/ui/EditorTextField; A(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$2;)V com/intellij/ui/EditorTextField addFocusListener !(Ljava/awt/event/FocusListener;)V getChangeListName ()Ljava/lang/String; )com/intellij/openapi/util/text/StringUtil isEmptyOrSpaces (Ljava/lang/String;)Z 
access$600 ?(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)V Kcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox � � � 7 8 "java/lang/invoke/LambdaMetafactory metafactory � Lookup �(Ljava/lang/invoke/MethodHandles$Lookup;Ljava/lang/String;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodHandle;Ljava/lang/invoke/MethodType;)Ljava/lang/invoke/CallSite; � %java/lang/invoke/MethodHandles$Lookup java/lang/invoke/MethodHandles                     I     *+� *,� �           W            !            " #   $ '     D     � Y**� � � �           [           !      " #   ( )     [     � *�   � � 	 *� � 
+�  �           h  i  j           !      * +   , -     Q     *+� *� � Y*� � �           n  o  x           !      . /   0 1     y     **� � � � � �       
    |  }            !      " #     . /  2    P 3�    3 4 5  3 6 7 8     2     *� � �           h           !    9    : ;    < =    2                       %  & g < h  � � �  E     F  G H GPK
    �J�L嚛FM  M  S   com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox$1.class����   4 S	  -	  .	  /
  0
 1 2 3 4
 5 6	  7
 8 9
 : ; < = > 
val$this$0 <Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; 	val$panel Ljavax/swing/JPanel; this$1 ? MyEditorComboBox InnerClasses MLcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox; <init> �(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox;Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;Ljavax/swing/JPanel;)V Code LineNumberTable LocalVariableTable this OLcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox$1; documentChanged 4(Lcom/intellij/openapi/editor/event/DocumentEvent;)V e 1Lcom/intellij/openapi/editor/event/DocumentEvent; changeListName Ljava/lang/String; StackMapTable < @ A B 
SourceFile ChangeListChooserPanel.java EnclosingMethod  C        D @ E F G H I J K L M  N O P B Q R Mcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox$1 java/lang/Object 2com/intellij/openapi/editor/event/DocumentListener Kcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox /com/intellij/openapi/editor/event/DocumentEvent java/lang/String javax/swing/JPanel ?(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)V ()V getDocument (()Lcom/intellij/openapi/editor/Document; $com/intellij/openapi/editor/Document getText ()Ljava/lang/String; )com/intellij/openapi/util/text/StringUtil isEmptyOrSpaces (Ljava/lang/String;)Z this$0 :com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel 
access$400 �(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;Ljava/lang/String;)Lcom/intellij/openapi/vcs/changes/LocalChangeList; 
setVisible (Z)V                             H     *+� *,� *-� *� �                                     �     ,+� �  M*� ,� � *� � ,� 	� � � 
�           
 +         ,       ,   !  
 " " #  $   ) � '  % & '  (�    % & '  (  )    * +     ,       8         PK
    �J�L�\x��  �  Q   com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox.class����   4
  f	  g i
 6 j k  �= k�]
  l ��� 1;2 m n
 o p
  q	 r s
  t
 r u
  v
  w x
  y z {
  |
  }
  ~
  �
  � �
  � �	 � �
 h � �
  �	  � �
 % �
  �
  �
 � � �	 � � * � � �
 - �   �
  �
  � � �
  �
 - � � MyEditorComboBox InnerClasses 
PREF_WIDTH I ConstantValue   � myEditorTextField #Lcom/intellij/ui/LanguageTextField; this$0 <Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel; <init> ?(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)V Code LineNumberTable LocalVariableTable this MLcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox; fg Lcom/intellij/ui/JBColor; bg icon Lcom/intellij/ui/TextIcon; label Ljavax/swing/JLabel; panel Ljavax/swing/JPanel; compositeEditor )Lcom/intellij/ui/ComboBoxCompositeEditor; LocalVariableTypeTable `Lcom/intellij/ui/ComboBoxCompositeEditor<Ljava/lang/Object;Lcom/intellij/ui/LanguageTextField;>; getEditorTextField #()Lcom/intellij/ui/EditorTextField; RuntimeInvisibleAnnotations #Lorg/jetbrains/annotations/NotNull; lambda$new$0 i(Ljavax/swing/JPanel;Lcom/intellij/ui/ComboBoxCompositeEditor;Lcom/intellij/openapi/editor/ex/EditorEx;)V editor )Lcom/intellij/openapi/editor/ex/EditorEx; editorBackgroundColor Ljava/awt/Color; 
access$100 p(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox;)Lcom/intellij/ui/EditorTextField; x0 	Signature QLcom/intellij/openapi/ui/ComboBox<Lcom/intellij/openapi/vcs/changes/ChangeList;>; 
SourceFile ChangeListChooserPanel.java U V ? @ � Kcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox A � com/intellij/ui/JBColor A � com/intellij/ui/TextIcon New � � � A � � � � � � � � � � � � javax/swing/JLabel A � javax/swing/JPanel java/awt/BorderLayout A � A � � � � � � � � Center � � !com/intellij/ui/LanguageTextField � � � � �   A � = > Mcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox$1 A � � � � � � � � $com/intellij/openapi/editor/Document � � � � � 'com/intellij/ui/ComboBoxCompositeEditor javax/swing/JComponent A � BootstrapMethods � � � � � � � � � � � � � �  com/intellij/openapi/ui/ComboBox :com/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel (I)V (II)V com/intellij/util/ui/JBUI scale (I)I 6(Ljava/lang/String;Ljava/awt/Color;Ljava/awt/Color;I)V com/intellij/ui/RelativeFont TINY Lcom/intellij/ui/RelativeFont; getFont ()Ljava/awt/Font; derive  (Ljava/awt/Font;)Ljava/awt/Font; setFont (Ljava/awt/Font;)V setRound (Ljavax/swing/Icon;)V ()V (Ljava/awt/LayoutManager;)V 	setOpaque (Z)V !com/intellij/util/ui/JBUI$Borders Borders empty *(IIII)Lcom/intellij/util/ui/JBEmptyBorder; 	setBorder (Ljavax/swing/border/Border;)V add )(Ljava/awt/Component;Ljava/lang/Object;)V 0com/intellij/openapi/fileTypes/PlainTextLanguage INSTANCE 2Lcom/intellij/openapi/fileTypes/PlainTextLanguage; 
access$700 d(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;)Lcom/intellij/openapi/project/Project; W(Lcom/intellij/lang/Language;Lcom/intellij/openapi/project/Project;Ljava/lang/String;)V �(Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel$MyEditorComboBox;Lcom/intellij/openapi/vcs/changes/ui/ChangeListChooserPanel;Ljavax/swing/JPanel;)V addDocumentListener 7(Lcom/intellij/openapi/editor/event/DocumentListener;)V getDocument (()Lcom/intellij/openapi/editor/Document; com/intellij/util/ObjectUtils assertNotNull &(Ljava/lang/Object;)Ljava/lang/Object; @com/intellij/openapi/vcs/changes/ChangeListCompletionContributor COMBO_BOX_KEY Lcom/intellij/openapi/util/Key; putUserData 4(Lcom/intellij/openapi/util/Key;Ljava/lang/Object;)V 4(Ljavax/swing/JComponent;[Ljavax/swing/JComponent;)V
 � � ,(Lcom/intellij/openapi/editor/ex/EditorEx;)V
  � customizeSettings g(Ljavax/swing/JPanel;Lcom/intellij/ui/ComboBoxCompositeEditor;)Lcom/intellij/ui/EditorSettingsProvider; addSettingsProvider +(Lcom/intellij/ui/EditorSettingsProvider;)V 	setEditor (Ljavax/swing/ComboBoxEditor;)V 'com/intellij/openapi/editor/ex/EditorEx getBackgroundColor ()Ljava/awt/Color; setBackground (Ljava/awt/Color;)V � � � Y Z "java/lang/invoke/LambdaMetafactory metafactory � Lookup �(Ljava/lang/invoke/MethodHandles$Lookup;Ljava/lang/String;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodType;Ljava/lang/invoke/MethodHandle;Ljava/lang/invoke/MethodType;)Ljava/lang/invoke/CallSite; � %java/lang/invoke/MethodHandles$Lookup java/lang/invoke/MethodHandles $$$reportNull$$$0 � �
  � *@NotNull method %s.%s must not return null � java/lang/Object � i U java/lang/String � format 9(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String; � �
 � � java/lang/IllegalStateExceptio