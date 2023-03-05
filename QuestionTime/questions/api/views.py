from rest_framework import viewsets ,generics,status
from questions.models import Question , Answer
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404
from questions.api.serializers import QuestionSerializer, AnswerSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from questions.api.permission import IsAuthorOrReadOnly

class QuestionViewSet(viewsets.ModelViewSet):
     queryset = Question.objects.all().order_by("-created_at")
     serializer_class = QuestionSerializer
     permission_classes = [IsAuthenticated,IsAuthorOrReadOnly]
     lookup_field = "slug"

     def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    #  def get_queryset(self):
    #      import time
    #      time.sleep(3)
    #      return super().get_queryset()

    

    #  def get_queryset(self):
    #      raise Exception("Not Implemented")
    #      return super().get_queryset()
        

class AnswerCreateAPIView(generics.CreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]
   
    def perform_create(self,serializer):
        request_user = self.request.user
        kwarg_slug = self.kwargs.get("slug")
        question = get_object_or_404(Question,slug=kwarg_slug)
        if question.answers.filter(author=request_user).exists():
            raise ValidationError("You have already answered this Question")
        serializer.save(author = request_user,question=question)



class AnswerRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated,IsAuthorOrReadOnly]
    lookup_field = "uuid"



class AnswerListAPIView(generics.ListAPIView):
    serializer_class =AnswerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        kwarg_slug = self.kwargs.get("slug")
        return Answer.objects.filter(question__slug = kwarg_slug).order_by("-created_at")

class AnswerLikeAPIView(APIView):
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]

    def post(self,request,uuid):
        answer = get_object_or_404 (Answer, uuid=uuid)
        answer.voters.add(request.user)
        answer.save()
        serializer_context = {"request":request}
        serializer = self.serializer_class(answer,context=serializer_context)
        return Response(serializer.data,status = status.HTTP_200_OK)
    
    def delete(self,request,uuid):
        answer = get_object_or_404 (Answer, uuid=uuid)
        answer.voters.remove(request.user)
        answer.save()
        serializer_context = {"request":request}
        serializer = self.serializer_class(answer,context=serializer_context)
        return Response(serializer.data,status = status.HTTP_200_OK)
    