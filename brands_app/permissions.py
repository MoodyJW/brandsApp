from rest_framework.permissions import SAFE_METHODS, IsAdminUser, BasePermission


class IsOwnerOrReadOnly(BasePermission):
    """
    Custom permission to allow users to edit their own info/favorites
    as well as admins.
    """
    def has_permission(self, request, view):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # allow admin (user.is_staff) to edit regardless of ownership
        print ("viewZ???", view.__dict__)
        print ("requeZt.meth???", request.method)
        if request.method in SAFE_METHODS:
            print ('haZ safety????')
            return True
        # Write permissions are only allowed to the owner of the user.
        if request.user.is_superuser:
            print ('iZ super????')
            return True
        if view.suffix == 'List':
            return False
        print ('haZ permissions????')
        return True

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # allow admin (user.is_staff) to edit regardless of ownership
        print ('METH.requeZt', request.method)
        if request.method in SAFE_METHODS:
            print ('SAFETY!!!!!')
            return True
        # Write permissions are only allowed to the owner of the user.
        if request.user.is_superuser:
            print ('SUPER!!!')
            return True
        print ('object = ', obj, obj.id, request.user.id )
        return obj.id == request.user.id

class IsAdminUserOrReadOnly(IsAdminUser):

    def has_permission(self, request, view):
        is_admin = super().has_permission(request, view)
        return request.method in SAFE_METHODS or is_admin

# class CustomUpdatePermission(permissions.BasePermission):
#     """
#     Permission class to check that a user can update his own resource only
#     """

#     def has_permission(self, request, view):
#         # check that its an update request and user is modifying his resource only
#         if view.action == 'update' and view.kwargs['pk']!=request.user.pk:
#             return False # not grant access
#         return True # grant access otherwise